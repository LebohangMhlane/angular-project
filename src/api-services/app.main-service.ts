
import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
   providedIn: 'root',
})
export class ApiService{

   httpClient;
   apiResponse: any;

   constructor(httpClient: HttpClient){
      this.httpClient = httpClient;
   }
   
   async getNewDogImage(): Promise<string> {
      try{
         let url = "https://dog.ceo/api/breeds/image/random"
         await this.httpClient.get(url).subscribe(data => {
            this.apiResponse = data;
         });
         return this.apiResponse["message"];
      } catch (error) {
         return "";
      }
   }

}
