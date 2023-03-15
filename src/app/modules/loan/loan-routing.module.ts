import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLoanComponent } from './pages/business-loan/business-loan.component';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';
import { HomeLoanComponent } from './pages/home-loan/home-loan.component';
import { InstaLoanComponent } from './pages/insta-loan/insta-loan.component';
import { PersonalLoanComponent } from './pages/personal-loan/personal-loan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLoanComponent,
  },
  {
    path: 'home-loan',
    component: HomeLoanComponent,
  },
  {
    path: 'personal-loan',
    component: PersonalLoanComponent,
  },
  {
    path: 'business-loan',
    component: BusinessLoanComponent,
  },
  {
    path: 'insta-loan',
    component: InstaLoanComponent,
  },
  {
    path: 'credit-card',
    component: CreditCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
