import { state, style, trigger, transition, animate, sequence, stagger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger("changeColor", [
      state("true", style({"background-color": "green"})),
      state("false", style({"background-color": "blue"})),
      transition("true => false", [
        animate('2s'),
      ]),
      transition("false => true", [
        animate('2s'),
      ]),
    ]),
  ]
})
export class OpenCloseComponent {

  colorIsInitial = "true";
  
  toggleColorChange(){
    this.colorIsInitial == "true" ? 
    this.colorIsInitial = "false" : 
    this.colorIsInitial = "true";
  }

}

