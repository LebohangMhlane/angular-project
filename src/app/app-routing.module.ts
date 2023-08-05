import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "register", component: RegistrationpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
