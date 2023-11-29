import { Component } from '@angular/core';

@Component({
  selector: 'app-operabrowser',
  templateUrl: './operabrowser.component.html',
  styleUrls: ['./operabrowser.component.css']
})
export class OperabrowserComponent {

  listOfWidgetItems: Record<string, any>[] = [
    {"name": "YouTube.com", "logo": "assets/youtubesolid.jpg", "isCustom": false,},
    {"name": "Chess.com", "logo": "assets/chessLogo.png", "isCustom": false,},
    {"name": "Facebook.com", "logo": "assets/facebook.png", "isCustom": true,},
    {"name": "LinkedIn.com", "logo": "assets/linkedin.png", "isCustom": true,},
    {"name": "Gmail.com", "logo": "assets/gmailLogo.webp", "isCustom": true,},
  ];

  widgetItemVisible: boolean = true;

  addNewWidgetItem(){
    this.listOfWidgetItems.push(
      {"name": "Gmail.com", "logo": "assets/gmailLogo.webp", "isCustom": true}
    );
    this.listOfWidgetItems.forEach((widgetItem) => {
      console.log(widgetItem);
    })
  }

}
