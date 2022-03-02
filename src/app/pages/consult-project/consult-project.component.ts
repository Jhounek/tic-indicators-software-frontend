import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-consult-project',
  templateUrl: './consult-project.component.html',
  styleUrls: ['./consult-project.component.css']
})
export class ConsultProjectComponent implements OnInit {
  listProjects: any[] = [];

  constructor(
    private _generalService: GeneralService,
  ) {}

  ngOnInit(): void {
    this.loadProjectsList();
  }

  loadProjectsList() {
    this._generalService.generateConsult('projects').subscribe(
      (res) => {
        this.listProjects = res.data;
        console.log(this.listProjects);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
