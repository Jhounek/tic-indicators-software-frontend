import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { CreateHelpDeskComponent } from './pages/create-help-desk/create-help-desk.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { CreateMoneyComponent } from './pages/create-money/create-money.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAvailabilityServicesComponent } from './pages/create-availability-services/create-availability-services.component';
import { CreateServiceLevelsComponent } from './pages/create-service-levels/create-service-levels.component';
import { ConsultEmployeeComponent } from './pages/consult-employee/consult-employee.component';
import { ConsultMoneyComponent } from './pages/consult-money/consult-money.component';
import { ConsultProjectComponent } from './pages/consult-project/consult-project.component';
import { ConsultHelpDeskComponent } from './pages/consult-help-desk/consult-help-desk.component';
import { ConsultAvailabilityServicesComponent } from './pages/consult-availability-services/consult-availability-services.component';
import { ConsultServicesLevelsComponent } from './pages/consult-services-levels/consult-services-levels.component';
import { GeneralPipe } from './pipes/general.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateEmployeeComponent,
    CreateTeamComponent,
    CreateHelpDeskComponent,
    CreateProjectComponent,
    CreateMoneyComponent,
    CreateAvailabilityServicesComponent,
    CreateServiceLevelsComponent,
    ConsultEmployeeComponent,
    ConsultMoneyComponent,
    ConsultProjectComponent,
    ConsultHelpDeskComponent,
    ConsultAvailabilityServicesComponent,
    ConsultServicesLevelsComponent,
    GeneralPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
