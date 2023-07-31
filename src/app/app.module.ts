import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownmenuComponent } from './dropdownmenu/dropdownmenu.component';
import { DropdownmenutwoComponent } from './dropdownmenutwo/dropdownmenutwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DropdownmenuComponent,
    DropdownmenutwoComponent 
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
