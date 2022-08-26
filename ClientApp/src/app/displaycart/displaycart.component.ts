import { Component, OnInit } from '@angular/core';
import { CartService, CartDetails } from '../cart.service';

@Component({
  selector: 'displaycart',
  templateUrl: './displaycart.component.html',
  styleUrls: ['./displaycart.component.css']
})
export class DisplaycartComponent implements OnInit {

  constructor(private thisCartService: CartService) {
    this.cartDetailsDisplay = thisCartService.GetCartDetails();
  }

  public thisRemoveDonut(donutId: number) {
    this.thisCartService.removeFromCart(donutId);
  }
  public cartDetailsDisplay: CartDetails | null = null;

  ngOnInit(): void {
  }

}
