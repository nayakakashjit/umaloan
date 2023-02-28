import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // banners: any;
  banners:any = [
    // {
    //   image: '../../assets/images/banner/personal_loan_banner.jpg'
    // },
    //  {
    //   image: '../../assets/images/banner/loan_banner.jpg'
    // },
     {
      image: '../../assets/images/banner/home_banner.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
