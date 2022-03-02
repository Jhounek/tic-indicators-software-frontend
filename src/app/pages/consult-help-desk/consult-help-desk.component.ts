import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-consult-help-desk',
  templateUrl: './consult-help-desk.component.html',
  styleUrls: ['./consult-help-desk.component.css']
})
export class ConsultHelpDeskComponent implements OnInit {

  listHelpDesk:any []= [];

  constructor(
    private _generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.loadHelpDeskList();
  }

  loadHelpDeskList(){
    this._generalService.generateConsult('help_table').subscribe(
      (res) => {
        this.listHelpDesk = res.data;
        console.log(this.listHelpDesk);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
