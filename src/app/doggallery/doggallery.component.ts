import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doggallery',
  templateUrl: './doggallery.component.html',
  styleUrls: ['./doggallery.component.css']
})
export class DoggalleryComponent {
  httpService;
  jsonResponse: any;

  constructor(httpService: HttpClient){
    this.httpService = httpService;
  }

  currentIndex : number = 0;
  loadingImage : boolean = false;

  favouriteDogImages : string[] = [];
  dogImages = ["https://images.dog.ceo/breeds/terrier-dandie/n02096437_3167.jpg"];
  
  async getNextDogImage() {
    try{
      this.loadingImage = true;
      let newIndex : number = this.currentIndex + 1;
      if(newIndex > this.dogImages.length - 1){
        let url = "https://dog.ceo/api/breeds/image/random";
        this.httpService.get(url).subscribe(data => {
          this.jsonResponse = data as Record<string, string>;
          this.dogImages.push(this.jsonResponse["message"]);
          this.currentIndex = newIndex;
          this.loadingImage = false;
        });
      } else {
        this.loadingImage = false;
        this.currentIndex = newIndex;
      }
    } catch (error) {
      this.loadingImage = false;
      console.log("Failed to get image from api");
    }
  }

  getPreviousDogImage(){
    this.currentIndex = this.currentIndex - 1;
  }

  favouriteADogImage(){
    let currentDogImageViewed : string = this.dogImages[this.currentIndex];
    if(this.favouriteDogImages.findIndex(value => value === currentDogImageViewed) == -1){
      this.favouriteDogImages.push(
        this.dogImages[this.currentIndex]
      );
    }
    console.log(this.favouriteDogImages);
  }

}
