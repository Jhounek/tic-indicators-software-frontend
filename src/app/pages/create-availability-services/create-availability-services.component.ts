import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-availability-services',
  templateUrl: './create-availability-services.component.html',
  styleUrls: ['./create-availability-services.component.css']
})
export class CreateAvailabilityServicesComponent implements OnInit {
  listPeriod: any = [];
  formRegisterAvailabilityService: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) { 
    this.formRegisterAvailabilityService = this.createFormRegisterAvailabilityService();
  }

  ngOnInit(): void {
    this.loadPeriod();
  }
  createFormRegisterAvailabilityService() {
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
      total_value: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      hour_failed: new FormControl({ value: null, disabled: false }, [
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
      "type_work_id": "4",
      "standard_value": data['standard_value'],
      "critical_value": data['critical_value'],
      "total_hours": data['total_value'],
      "failures_hours": data['hour_failed']
    };
  
    this.formRegisterAvailabilityService.reset();
    this._generalService.generateCreate('employee_periods', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }


}
