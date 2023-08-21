import { Component } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent {

  userProfile1: UserProfile = new UserProfile("Lebohang", "Mhlane");
  userProfile2: UserProfile = new UserProfile("Kai", "Moriarty");
  userProfile3: UserProfile = new UserProfile("Zama", "Buddy");
  userProfile4: UserProfile = new UserProfile("Liam", "Neeson");
  userProfile5: UserProfile = new UserProfile("Mike", "Myers");

  feedback1: FeedbackMessage = new FeedbackMessage(this.userProfile1, 
    new Contract(
      this.userProfile1, 
      "Domestic Worker", 
      4500, 
      true, 
      "Westville, Durban, South Africa", 
      "May be required to wear provided uniform", 
      6
    ),
    "Good work",
    4
  );
  feedback2: FeedbackMessage = new FeedbackMessage(this.userProfile1, 
    new Contract(this.userProfile2, "Gardner", 600, false, "Hillcrest, Durban, South Africa", "None", 0),
    "Wonderful stuff. Thank you!",
    5
  )
  feedback3: FeedbackMessage = new FeedbackMessage(this.userProfile1, 
    new Contract(this.userProfile3, "Tile Fitter", 3500, false, "Seaview, Durban, South Africa", "Must show proof of previous work", 0),
    "You could've done a better job.",
    2
  )
  feedBackMessages: Array<FeedbackMessage> = [this.feedback1, this.feedback2, this.feedback3];

  availabeContracts: Contract[] = [
    new Contract(this.userProfile1, "Domestic Worker", 4500, true, "Westville, Durban, South Africa", "May be required to wear provided uniform", 6),
    new Contract(this.userProfile2, "Gardner", 600, false, "Hillcrest, Durban, South Africa", "None", 0),
    new Contract(this.userProfile3, "Tile Fitter", 3500, false, "Seaview, Durban, South Africa", "Must show proof of previous work", 0),
    new Contract(this.userProfile4, "Plumber", 5500, false, "La Lucia, Durban, South Africa", "None", 0),
    new Contract(this.userProfile5, "Domestic Worker", 4000, true, "Harrismith, Gauteng, South Africa", "None", 2),
  ];

  showSomething(){
    console.log("Pressed");
  }

}

class Contract{

  userProfile: UserProfile;
  service: string;
  offerFee: number;
  isOnGoing: boolean;
  periodInMonths: number;
  location: string;
  additionalInfo: string;

  constructor(
    userProfile: UserProfile,
    service: string,
    offerFee: number,
    isOnGoing: boolean,
    location: string,
    additionalInfo: string,
    periodInMonths: number,
  ){
    this.userProfile = userProfile;
    this.service = service;
    this.offerFee = offerFee;
    this.isOnGoing = isOnGoing;
    this.location = location;
    this.additionalInfo = additionalInfo;
    this.periodInMonths = periodInMonths;
  }
  
  isCompleted: boolean = false;
  created: string = new Date().toDateString();

  setAsCompleted(){
    this.isCompleted = true;
  }

}

class UserProfile{

  name: string;
  lastName: string;

  constructor(name: string, lastName: string){
    this.name = name;
    this.lastName = lastName;
  }

  getFullName(){
    return this.name + " " + this.lastName;
  }

}

class FeedbackMessage{

  userProfile: UserProfile;
  contract: Contract;
  message: string;
  rating:number;
  ratingSystem: RatingSystem;

  constructor(userProfile: UserProfile, contract: Contract, message: string, rating:number){
    this.userProfile = userProfile;
    this.contract = contract;
    this.message = message;
    this.rating = rating;
    this.ratingSystem = new RatingSystem(rating);

  }

}

class RatingSystem{

  rating: number;
  lowRating: boolean = false;
  oneStarRating: boolean = false;

  constructor(rating:number){
    this.rating = rating;
    rating < 3 ? this.lowRating = true : false;
    rating == 1 ? this.oneStarRating = true : false;
  }

  renderGreenStars(){
    const stars = Array.from({ length: this.rating}, (_, index) => index);
    return stars;
  }
  renderWhiteStars(){
    const stars = Array.from({ length: 5 - this.rating}, (_, index) => index);
    return stars;
  }
  renderYellowStars(){
    const stars = Array.from({ length: this.rating}, (_, index) => index);
    return stars;
  }
  renderRedStars(){
    const stars = Array.from({ length: 0}, (_, index) => index);
    return stars;
  }


}