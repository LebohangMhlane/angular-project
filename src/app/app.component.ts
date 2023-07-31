import { Component } from '@angular/core';
import { ApiService } from '../api-services/app.main-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "MyAngularProject";
  apiService;
  httpService;

  constructor(apiService: ApiService, httpClientService: HttpClient){
    this.apiService = apiService;
    this.httpService = httpClientService;
  }

  currentDogImage: string = "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_2031.jpg";

  updateDog(){
    try{
      this.apiService.getNewDogImage().then((dogImage)=>{
        dogImage == "" ? null : this.currentDogImage = dogImage;
      });
    } catch (error) {
      console.log(error);
    }
  }

}

