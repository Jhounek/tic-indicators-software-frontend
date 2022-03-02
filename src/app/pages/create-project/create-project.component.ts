import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  listPeriod: any = [];
  listEmployee: any = [];
  formRegisterProject: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.formRegisterProject = this.createFormRegisterProject();
   }

  ngOnInit(): void {
    this.loadPeriod();
    this.loadEmployee();
  }

  createFormRegisterProject() {
    return new FormGroup({
      period: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      employee: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      standard_value: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ]),
      critical_value: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      asigned_cases: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      resolve_cases: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ])
    });
  }
  
  loadPeriod() {
    this._generalService.generateConsult('periods').subscribe(
      (res) => {
        this.listPeriod = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadEmployee() {
    this._generalService.generateConsult('employees').subscribe(
      (res) => {
        this.listEmployee = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  generateRequest(data: any) {
    const objRequest = {
      "employee_id": data['employee'],
      "period_id": data['period'],
      "type_work_id": "1",
      "standard_value": data['standard_value'],
      "critical_value": data['critical_value'],
      "projected_activity": data['asigned_cases'],
      "activity_executed": data['resolve_cases']
    };
  
    this.formRegisterProject.reset();
    this._generalService.generateCreate('employee_periods', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }

}
