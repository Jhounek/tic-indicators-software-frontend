import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-service-levels',
  templateUrl: './create-service-levels.component.html',
  styleUrls: ['./create-service-levels.component.css']
})
export class CreateServiceLevelsComponent implements OnInit {
  listPeriod: any = [];
  formRegisterServiceLevels: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.formRegisterServiceLevels= this.createFormRegisterServiceLevels();
   }

  ngOnInit(): void {
    this.loadPeriod();
  }

  createFormRegisterServiceLevels() {
    return new FormGroup({

      period: new FormControl({ value: '', disabled: false }, [
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
      time_case: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      open_case: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ]),
      next_case: new FormControl({ value: null, disabled: false }, [
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
  generateRequest(data: any) {
    const objRequest = {
      "period_id": data['period'],
      "type_work_id": "5",
      "standard_value": data['standard_value'],
      "critical_value": data['critical_value'],
      "total_hours": data['time_case'],
      "failures_hours": data['open_case'],
      "cumplimiento_actividades": data['next_case']
    };
  
    this.formRegisterServiceLevels.reset();
    this._generalService.generateCreate('employee_periods', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }



}
