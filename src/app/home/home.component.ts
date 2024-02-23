import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  httpService;
  jsonResponse: any;

  constructor(httpService: HttpClient){
    this.httpService = httpService;
  }

  currentIndex : number = 0;
  dogImages = ["https://images.dog.ceo/breeds/terrier-dandie/n02096437_3167.jpg"];
  
  async getDogImage() {
    try{
      let newIndex : number = this.currentIndex + 1;
      if(newIndex > this.dogImages.length - 1){
        let url = "https://dog.ceo/api/breeds/image/random";
        this.httpService.get(url).subscribe(data => {
          this.jsonResponse = data as Record<string, string>;
          this.dogImages.push(this.jsonResponse["message"]);
          this.currentIndex = newIndex;
        });
      } else {
        this.currentIndex = this.currentIndex + 1;
      }
    } catch (error) {
      console.log("Failed to get image from api");
    }
  }

  getPreviousDogImage(){
    this.currentIndex = this.currentIndex - 1;
  }

}
