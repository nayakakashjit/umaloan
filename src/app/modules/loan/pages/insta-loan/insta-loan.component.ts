import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  ) {
    this.enquiryForm = this.formBuilder.group({
      name: ["", Validators.required ],
      email: ["", [Validators.required, Validators.email]],
      amount: [null, Validators.required ],
      phone: [null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    })
  }

  get f() {
    return this.enquiryForm.controls;
  }

  ngOnInit() {
    console.log('instaloan');
  };

  public sendInstaLoan(){
    console.log(this.enquiryForm.value);
    this.submitted = true;
    if (this.enquiryForm.invalid) {
     return;
   }
  }

}
