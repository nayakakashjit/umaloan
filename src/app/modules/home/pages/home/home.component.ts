import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // banners: any;
  banners:any = [
    {
      image: '../../assets/images/banner/Credit_Card.jpg'
    },
     {
      image: '../../assets/images/banner/Home_Loan.jpg'
    },
     {
      image: '../../assets/images/banner/Insta_Loan.jpg'
    },
    {
      image: '../../assets/images/banner/Personal_Loan.jpg'
    },
    {
      image: '../../assets/images/banner/business_loan.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
