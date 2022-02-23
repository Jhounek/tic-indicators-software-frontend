import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
const routes: Routes = [
   {
     path: '',
     component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  }, 
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'create-team',
    component: CreateTeamComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
