import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleValue: boolean = false;

  constructor() {

  }

  ngOnInit() {
    $(document).ready(function () {
      $(document).click(function (event) { 
        var clickover = $(event.target);   
        var _opened = $(".exo-menu").hasClass("display");
        if (_opened === true && !clickover.hasClass("span-toggle")) { 
          $('.exo-menu').removeClass("display");
          $('.nav-toggle').removeClass("active");
        }
      });
    });
  }

  toggle() {
    this.toggleValue = !this.toggleValue ? true : false;
  }


}
