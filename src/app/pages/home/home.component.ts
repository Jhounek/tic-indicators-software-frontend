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
      description: 'Registra un nuevo proyecto'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Equipo',
      route: 'create-team',
      description: 'Registra un nuevo equipo'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Mesa de ayuda',
      route: 'create-help-desk',
      description: 'Registra los datos para Mesa de ayuda'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Empleado',
      route: 'create-employee',
      description: 'Registra un nuevo empleado'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Pesos',
      route: 'create-money',
      description: 'Registra los datos a la hoja Pesos'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Servicios',
      route: 'create-availability-services',
      description: 'No se que poner'
    },
    {
      imgUrl: 'https://picsum.photos/500/300',
      logoUrl: 'https://picsum.photos/50/50',
      title: 'Niveles de servicio',
      route: 'create-service-levels',
      description: 'No se que poner'
    },
  ]

  constructor(
    private router: Router,
  ) { }

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

  setRoute(query:any){
    this.router.navigate([query]);
  }

}
