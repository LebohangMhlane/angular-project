import { state, style, trigger, transition, animate, sequence, stagger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger("changeColor", [
      transition(":enter", [
        style({'background-color': 'grey'}),
        animate('2s', style({'background-color': 'blue'})),
        animate('2s', style({'background-color': 'black'})),
        animate('2s', style({'background-color': 'brown'})),
      ]),
      state('brown', style({'background-color': 'brown'})),
    ]),
  ]
})
export class OpenCloseComponent {

  colorIsBlack = true;

  

  toggleColorChange(){
    this.colorIsBlack = !this.colorIsBlack;
  }

}

