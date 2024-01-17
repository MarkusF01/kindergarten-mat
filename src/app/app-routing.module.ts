import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './about-page/contact-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {KindergardenOverviewComponent} from "./kindergarden-overview/kindergarden-overview.component";
import {KindergardenDetailComponent} from "./kindergarden-detail/kindergarden-detail.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'kindergardens', component: KindergardenOverviewComponent },
  { path: 'kindergardens/:id', component: KindergardenDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
