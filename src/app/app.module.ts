import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent,
    RegistrationpageComponent,
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
