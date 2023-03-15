import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-insta-loan',
  templateUrl: './insta-loan.component.html',
  styleUrls: ['./insta-loan.component.css']
})
export class InstaLoanComponent implements OnInit {
  enquiryForm : FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiservice:ApiService,
  ) {
    this.enquiryForm = this.formBuilder.group({
      name: ["", Validators.required ],
      location: ["", Validators.required ],
      email: ["", [Validators.required, Validators.email]],
      officialemail: ["", [Validators.required, Validators.email]],
      amount: [null, Validators.required ],
      salary: [null, Validators.required ],
      phone: [null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      pan: [null, [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      selected_bank: ["", Validators.required ],
    })
  }

  get f() {
    return this.enquiryForm.controls;
  }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  };

  public sendInstaLoan(){
    this.apiservice.post('/sendFormData', this.enquiryForm.value).subscribe(
      (res)=> {
        console.log('Res', res);
        
      },
      (error)=> {
        console.log('error', error);
        
      }
    )
    console.log(this.enquiryForm.value);
    this.submitted = true;
    if (this.enquiryForm.invalid) {
     return;
   }
  }

}
