import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'charts',component:ChartsComponent},
  {path:'notification',component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
