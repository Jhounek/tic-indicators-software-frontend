import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewCreate: boolean = false;
  viewConsult: boolean = false;
  listCreate = [
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Proyecto',
      route: 'create-project',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Equipo',
      route: 'create-team',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Mesa de ayuda',
      route: 'create-help-desk',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Empleado',
      route: 'create-employee',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Pesos',
      route: 'create-money',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Servicios',
      route: 'create-availability-services',
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Niveles de servicio',
      route: 'create-service-levels',
    },
  ]
  listConsult = [
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Empleados',
      route: 'consult-employee-list'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Pesos',
      route: 'consult-money-list'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Proyectos',
      route: 'consult-project-list'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Mesa de ayuda',
      route: 'consult-help-desk-list'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Disponibilidad de servicios (Grupal)',
      route: 'consult-availability-services-list'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Niveles de servicio (Grupal)',
      route: 'consult-services-levels-list'
    },
  ]

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    $('#viewCreate').slideUp();
    $('#viewConsult').slideUp();
  }


  showCreate() {
    $('#viewConsult').slideUp(1000);
    $('#viewCreate').slideDown(1000);
  }

  showConsult() {
    $('#viewCreate').slideUp(1000);
    $('#viewConsult').slideDown(1000);
  }

  setRoute(query: any) {
    this.router.navigate([query]);
  }

}
