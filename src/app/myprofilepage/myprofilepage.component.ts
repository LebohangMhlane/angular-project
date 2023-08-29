import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-myprofilepage',
  templateUrl: './myprofilepage.component.html',
  styleUrls: [
    './myprofilepage.component.css',
    './myprofilepage.css.components/messages.css.component/messages.css',
    './myprofilepage.css.components/offers.css.component/offers.css',
    './myprofilepage.css.components/contracthistory.css.component/contracthistory.css',
    './myprofilepage.css.components/contracthistory.css.component/profile.css'
  ]
})
export class MyprofilepageComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef){
  };

  contracts: number[] = [1, 2, 3, 4, 5, 6, 7];
  maximumReached: boolean = false;

  printList(){
    this.contracts.forEach(element => {
      console.log(element);
    });
  }

}
