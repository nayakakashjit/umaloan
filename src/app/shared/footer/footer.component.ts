import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public isShow: boolean;
  public topPosToStartShowing = 100;
  public eligibilityForm : FormGroup;
  public submitted: boolean = false;
  public enquiryForm: FormGroup;

  @HostListener("window:scroll")
  checkScroll() {
    // scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor(
    private router: Router,
    private apiservice:ApiService,
    // private spinnerService: NgxSpinnerService,
    private formBuilder: FormBuilder
    ) {
      this.enquiryForm = this.formBuilder.group({
        name: ["", Validators.required],
        phone: [
          null,
          [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
        ],
        email: ["", [Validators.required, Validators.email]],
        amount: [
          null,
          [Validators.required, Validators.pattern("^[0-9]*$")],
        ],
        emp_type: ["", Validators.required],
      });
    }

    get f() {
      return this.enquiryForm.controls;
    }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 5000);
  }

  public checkEligibility() {
    this.submitted = true;
    if (this.enquiryForm.invalid) {
      return;
    }
    // this.spinnerService.show();
    document.getElementById("closeModalButton").click();
   this.apiservice.post('/checkEligibility/send', this.enquiryForm.value).subscribe(
    (res)=> {
      // this.spinnerService.hide();
      Swal.fire('Thank you, we have received your info', 'A customer service representative will be in touch within 24 hours', 'success')
    },
    (err)=> {
      document.getElementById("closeModalButton").click();
      console.log(err);
      // this.spinnerService.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        })
    }
   )
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  routeFunc(pageName) {
     this.router.navigate([`${pageName}`]);
    this.gotoTop();
  }

}
