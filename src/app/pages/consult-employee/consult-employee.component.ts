import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-consult-employee',
  templateUrl: './consult-employee.component.html',
  styleUrls: ['./consult-employee.component.css']
})
export class ConsultEmployeeComponent implements OnInit {
  listEmployees:any = [];
  listRoles:any = [];
  listTeams: any = [];
  listTypeDocument: any = [];

  constructor(
    private _generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadTypeDocument();
    this.loadRoles();
    this.loadTeams();
  }

  loadEmployees() {
    this._generalService.generateConsult('employees').subscribe(
      (res) => {
        this.listEmployees = res.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadTypeDocument(){
    this._generalService.generateConsult('type_document_identifications').subscribe(
      (res) => {
        this.listTypeDocument = res.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadRoles(){
    this._generalService.generateConsult('roles').subscribe(
      (res) => {
        this.listRoles = res.data;
        console.log(this.listRoles);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadTeams(){
    this._generalService.generateConsult('teams').subscribe(
      (res) => {
        this.listTeams = res.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
