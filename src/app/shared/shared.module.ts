import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners/partners.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { LoanEmiCalculatorComponent } from './loan-emi-calculator/loan-emi-calculator.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PartnersComponent, SearchComponent, LoanEmiCalculatorComponent],
  imports: [
    CommonModule, FormsModule, Ng5SliderModule, NgxSpinnerModule
  ],
  exports: [PartnersComponent, SearchComponent, LoanEmiCalculatorComponent]
})
export class SharedModule { }
