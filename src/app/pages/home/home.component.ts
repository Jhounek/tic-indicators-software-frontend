import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewCreate: boolean = false;
  viewConsult: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
    $('#viewCreate').slideUp();
    $('#viewConsult').slideUp();
  }

  showCreate() {
    $('#viewConsult').slideUp(2000);
    $('#viewCreate').slideDown(2000);
  }

  showConsult() {
    $('#viewCreate').slideUp(2000);
    $('#viewConsult').slideDown(2000);
  }

}
