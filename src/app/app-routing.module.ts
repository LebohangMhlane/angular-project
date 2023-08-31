import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ProfileComponent } from './profile/profile.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "mycontracts", component: ContractsComponent},
  {path: "myprofile", component: ProfileComponent},
  {path: "animations", component: OpenCloseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
