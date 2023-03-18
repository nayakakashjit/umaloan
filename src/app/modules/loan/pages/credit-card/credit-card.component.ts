import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  public enquiryForm : FormGroup;
  public submitted: boolean = false;
  public showDiv : boolean = true;

  constructor( private formBuilder: FormBuilder, private apiservice:ApiService,) { 
    this.enquiryForm = this.formBuilder.group({
      name: ["", Validators.required ],
      company_name: ["", Validators.required ],
      email: ["", [Validators.required, Validators.email]],
      employment_type: ["", Validators.required ],
      gender: ["", Validators.required ],
      selected_bank: ["", Validators.required ],
      phone: [null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      maxLimit: ["", Validators.required],
      pan: [null, [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      ext_cc: [""],
      ext_cc_bank: ["", Validators.required],
    })
  }

  ngOnInit() {
  }

  get f() {
    return this.enquiryForm.controls;
  }

  public sendCreditCard(){
    console.log(this.enquiryForm.value);
    this.submitted = true;
    if (this.enquiryForm.invalid) {
     return;
   };
   this.apiservice.post('/sendFormData', this.enquiryForm.value).subscribe(
    (res)=> {
      console.log('Res', res);
      Swal.fire('Thank you, we have received your info', 'A customer service representative will be in touch within 24 hours', 'success')
    },
    (error)=> {
      console.log('error', error);
      
    }
  )
  }

  public radioButtonChanged($event){
   this.showDiv =  $event.target.value == 'yes' ? true : false;
 }

}
