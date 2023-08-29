import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: [
    './contracts.css.components/contracts.component.css',
    './contracts.css.components/messages.css.component/messages.css',
    './contracts.css.components/offers.css.component/offers.css',
    './contracts.css.components/contracthistory.css.component/contracthistory.css',
    './contracts.css.components/contracthistory.css.component/profile.css'
  ]
})
export class ContractsComponent {

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
