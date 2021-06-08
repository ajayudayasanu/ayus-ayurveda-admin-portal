import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
{
  path: 'dash-board',
  component : DashboardComponent
},
{
  path: 'messages',
  component : MessagesComponent
},
{
  path: 'appoinment',
  component : AppoinmentComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
