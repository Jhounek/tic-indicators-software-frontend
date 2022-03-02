import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  listDocuments: any = [];
  listTeams: any = [];
  listRoles: any = [];
  formRegisterEmployee: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.formRegisterEmployee = this.createFormRegisterEmployee();
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadTeams();
    this.loadTypeDocument();
  }

  createFormRegisterEmployee() {
    return new FormGroup({
      rol: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      team: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      typeDocument: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      documentNumber: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      NameEmployee: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ])
    });
  }

  loadRoles() {
    const urlConsult = 'roles';
    this._generalService.generateConsult(urlConsult).subscribe(
      (res) => {
        this.listRoles = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadTeams() {
    const urlConsult = 'teams';
    this._generalService.generateConsult(urlConsult).subscribe(
      (res) => {
        this.listTeams = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadTypeDocument() {
    const urlConsult = 'type_document_identifications';
    this._generalService.generateConsult(urlConsult).subscribe(
      (res) => {
        this.listDocuments = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateRequest(data: any) {
    const urlConsult = 'employees';
    const objRequest = {
      "role_id": data['rol'],
      "team_id": data['team'],
      "type_document_identification_id": data['typeDocument'],
      "identification_number": data['documentNumber'],
      "name": data['NameEmployee']
    };
    this.formRegisterEmployee.reset();
    this._generalService.generateCreate(urlConsult, objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }
}
