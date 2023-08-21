import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContractsComponent } from './contracts/contracts.component';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "mycontracts", component: ContractsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
