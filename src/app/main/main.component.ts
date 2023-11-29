import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  httpService;
  apiResponse: any;

  constructor(httpService: HttpClient){
    this.httpService = httpService;
  }

  currentDogImage: string = "";
  
  displayMessage(event: any){
  }

  async updateDog(): Promise<string> {
    try{
      let url = "https://dog.ceo/api/breeds/image/random";
      let response: any =  this.httpService.get(url);
      console.log(response.operator());
      // .subscribe(data => {
      //   this.apiResponse = data as Record<string, string>;
      //   console.log(this.apiResponse["message"]);
      // });
      return this.apiResponse["message"];
   } catch (error) {
      return "";
   }
  }

}
