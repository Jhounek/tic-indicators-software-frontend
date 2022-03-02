import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-money',
  templateUrl: './create-money.component.html',
  styleUrls: ['./create-money.component.css']
})
export class CreateMoneyComponent implements OnInit {
  listPeriod: any = [];
  listEmployee: any = [];
  formRegisterMoney: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.formRegisterMoney = this.createFormRegisterMoney();
  }
  ngOnInit(): void {
    this.loadPeriod();
    this.loadEmployee();
  }

  createFormRegisterMoney() {
    return new FormGroup({
      period: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      employee: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      activity_compliance: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      help_desk: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ]),
      availability_service: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      levels_service: new FormControl({ value: null, disabled: false }, [
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
      "type_work_id": "3",
      "cumplimiento_actividades": data['activity_compliance'],
      "help_table": data['help_desk'],
      "provision_services": data['availability_service'],
      "services_levels": data['levels_service']
    };
  
    this.formRegisterMoney.reset();
    this._generalService.generateCreate('employee_periods', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }
}
