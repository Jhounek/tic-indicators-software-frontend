import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-consult-money',
  templateUrl: './consult-money.component.html',
  styleUrls: ['./consult-money.component.css']
})
export class ConsultMoneyComponent implements OnInit {
  listMoney: any[] = [];
  constructor(
    private _generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.loadListMoney();
  }

  loadListMoney(){
    this._generalService.generateConsult('pesos').subscribe(
      (res) => {
        this.listMoney = res.data;
        console.log(this.listMoney);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
