import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
 public selectedValue: string;

  constructor( private router:Router) {
  }

  ngOnInit() {
    this.modo()
  }

  public modo(value: string  = '/loan/home-loan'){
    this.selectedValue = value;
  }

  public navigate() {
    this.router.navigate([this.selectedValue]);
  }
}
