import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  showDropDown = false;
  toggleDropDown(){
    this.showDropDown ? 
    this.showDropDown = false : 
    this.showDropDown = true;

    this.showDropDownTwo ? 
    this.showDropDownTwo = false : null;
  }

  showDropDownTwo = false;
  toggleDropDownTwo(){
    this.showDropDownTwo ? 
    this.showDropDownTwo = false : 
    this.showDropDownTwo = true;

    this.showDropDown ? 
    this.showDropDown = false : null;
  }

}
