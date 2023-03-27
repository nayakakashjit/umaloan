import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LoanRoutingModule } from './loan-routing.module';
import { HomeLoanComponent } from './pages/home-loan/home-loan.component';
import { PersonalLoanComponent } from './pages/personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './pages/business-loan/business-loan.component';
import { InstaLoanComponent } from './pages/insta-loan/insta-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';

@NgModule({
  declarations: [HomeLoanComponent, PersonalLoanComponent, BusinessLoanComponent, InstaLoanComponent, CreditCardComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class LoanModule { }
