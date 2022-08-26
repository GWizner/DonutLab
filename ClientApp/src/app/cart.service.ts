import { Injectable } from '@angular/core';
import { DonutDetails } from './donut-display/donut-display.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private priceTotal: number = 0;
  private calorieCount: number = 0;
  private donutPrice: number = 1.00;
  private cartStorage: DonutDetails[] = [];


  public addToCart(boughtDonut: DonutDetails) {
    this.cartStorage.push(boughtDonut);
    this.calorieCount += boughtDonut.calories;
    this.priceTotal += this.donutPrice;
   
    console.log("You have purchased one " + boughtDonut.name);
    console.log("You have bought " + this.cartStorage.length + " donuts. Your total is $" + this.priceTotal);
  }

  public removeFromCart(removedDonutId: number) {
    for (let currRemovedDonutNo = 0; currRemovedDonutNo < this.cartStorage.length; currRemovedDonutNo++) {
      if (this.cartStorage[currRemovedDonutNo].id == removedDonutId) {
        this.calorieCount -= this.cartStorage[currRemovedDonutNo].calories;
        this.priceTotal -= this.donutPrice;
        this.cartStorage.length--;

        console.log("You have removed " + this.cartStorage[currRemovedDonutNo].name + " from your cart");
        console.log("You have bought " + this.cartStorage.length + " donuts. Your total is $" + this.priceTotal);
        this.cartStorage.splice(currRemovedDonutNo, 1);
      }

    }
   
  }


  public GetCartDetails(): CartDetails {
    let thisCartDetails: CartDetails = new CartDetails(this.donutPrice, this.priceTotal, this.calorieCount, this.cartStorage);
    return thisCartDetails;
  }
}


export class CartDetails {

  constructor(thisDonutPrice: number, thisPriceTotal: number, thisCalorieCount: number, theseDonutDetails: DonutDetails[]) {
    this.thisDonutPrice = thisDonutPrice;
    this.thisPriceTotal = thisPriceTotal;
    this.thisCalorieCount = thisCalorieCount;
    this.theseDonutDetails = theseDonutDetails;
  }

  public thisDonutPrice: number = 0;
  public thisPriceTotal: number = 0;
  public thisCalorieCount: number = 0;
  public theseDonutDetails: DonutDetails[] = [];
}
