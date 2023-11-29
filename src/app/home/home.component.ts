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

  currentDogImage: string = "";
  
  async getDogImage() {
    try{
      let url = "https://dog.ceo/api/breeds/image/random";
      this.httpService.get(url).subscribe(data => {
        this.jsonResponse = data as Record<string, string>;
      });
    } catch (error) {
      console.log("Failed to get image from api");
    }
  }

}
