import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContractsComponent } from './contracts/contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent,
    ContractsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
