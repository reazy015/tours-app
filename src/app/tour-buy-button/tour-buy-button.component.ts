import {Component, Input, OnInit} from '@angular/core';
import {ITourClient} from '../interfaces';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-tour-buy-button',
  templateUrl: './tour-buy-button.component.html',
  styleUrls: ['./tour-buy-button.component.scss']
})
export class TourBuyButtonComponent implements OnInit {
  @Input() tour: ITourClient;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  onTourBuyHandler(event: Event): void {
    event.stopPropagation();
    this.cartService.addTourToCart(this.tour);
  }

}
