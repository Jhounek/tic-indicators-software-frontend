import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToSection(id:any){
      $('html, body').animate({
        scrollTop: $(`#${id}`).offset()?.top
      },1500);
  }

  setRoute(query: any) {
    this.router.navigate([query]);
  }

}
