import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContractsComponent } from './contracts/contracts.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "mycontracts", component: ContractsComponent},
  {path: "animations", component: OpenCloseComponent},
  {path: "dashboard", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
