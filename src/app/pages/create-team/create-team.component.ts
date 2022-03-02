import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service'

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  formRegisterTeam: FormGroup;

  constructor(
    private _generalService: GeneralService,
  ) { 
    this.formRegisterTeam = this.createFormRegisterTeam();
  }

  ngOnInit(): void {
  }

  createFormRegisterTeam() {
    return new FormGroup({
      
      nameTeam: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5),
      ]),
      descriptionTeam: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5),
      ]),
    });
  }
  generateRequest(data: any) {
    const objRequest = {
      "name": data['nameTeam'],
      "description": data['descriptionTeam']
    };
  
    this.formRegisterTeam.reset();
    this._generalService.generateCreate('teams', objRequest).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log(error);
      }
    );
  }

}
