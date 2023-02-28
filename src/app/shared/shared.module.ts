import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners/partners.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PartnersComponent, SearchComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [PartnersComponent, SearchComponent]
})
export class SharedModule { }
