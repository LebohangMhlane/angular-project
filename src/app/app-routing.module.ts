import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContractsComponent } from './contracts/contracts.component';
import { MyprofilepageComponent } from './myprofilepage/myprofilepage.component';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "mycontracts", component: ContractsComponent},
  {path: "myprofile", component: MyprofilepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
