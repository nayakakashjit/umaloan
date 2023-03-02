import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { HomeLoanComponent } from './pages/home-loan/home-loan.component';
import { PersonalLoanComponent } from './pages/personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './pages/business-loan/business-loan.component';
import { InstaLoanComponent } from './pages/insta-loan/insta-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeLoanComponent, PersonalLoanComponent, BusinessLoanComponent, InstaLoanComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoanModule { }
