import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SignUpLoginComponent } from './components/sign-up-login/sign-up-login.component';
import { GoldRateComponent } from './components/gold-rate/gold-rate.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'charts',component:ChartsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'signUp-login',component:SignUpLoginComponent},
  {path:'gold-rate',component:GoldRateComponent},
  {path:'form',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
