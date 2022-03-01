import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { CreateHelpDeskComponent } from './pages/create-help-desk/create-help-desk.component';
import { CreateProjectComponent} from './pages/create-project/create-project.component';
import { CreateMoneyComponent} from './pages/create-money/create-money.component';
import { CreateAvailabilityServicesComponent} from './pages/create-availability-services/create-availability-services.component';
import { CreateServiceLevelsComponent} from './pages/create-service-levels/create-service-levels.component';
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
  },

  {
    path: 'create-help-desk',
    component: CreateHelpDeskComponent,
  },

  {
    path: 'create-project',
    component: CreateProjectComponent,
  },

  {
    path: 'create-money',
    component: CreateMoneyComponent,
  },

  {
    path: 'create-availability-services',
    component: CreateAvailabilityServicesComponent,
  },

  {
    path: 'create-service-levels',
    component: CreateServiceLevelsComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
