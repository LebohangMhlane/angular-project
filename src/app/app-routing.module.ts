import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperabrowserComponent } from './operabrowser/operabrowser.component';
import { DoggalleryComponent } from './doggallery/doggallery.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "operabrowserfake", component: OperabrowserComponent},
  {path: "doggallery", component: DoggalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
