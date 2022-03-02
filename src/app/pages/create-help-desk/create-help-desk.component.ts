import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-help-desk',
  templateUrl: './create-help-desk.component.html',
  styleUrls: ['./create-help-desk.component.css']
})
export class CreateHelpDeskComponent implements OnInit {
  listPeriod: any = [];
  listEmployee: any = [];
  formRegisterHelpDesk: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.formRegisterHelpDesk = this.createFormRegisterHelpDesk();
  }
  ngOnInit(): void {
    this.loadPeriod();
    this.loadEmployee();
  }

  createFormRegisterHelpDesk() {
    return new FormGroup({
      period: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      employee: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      criticalValue: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      standardValue: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ]),
      asignedCases: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      resolveCases: new FormControl({ value: null, disabled: false }, [
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
      "type_work_id": "2",
      "standard_value": data['standardValue'],
      "critical_value": data['criticalValue'],
      "projected_activity": data['asignedCases'],
      "activity_executed": data['resolveCases']
    };
  
    this.formRegisterHelpDesk.reset();
    this._generalService.generateCreate('employee_periods', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }

}
