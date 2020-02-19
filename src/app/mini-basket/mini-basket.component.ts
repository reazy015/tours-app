import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-mini-basket',
  templateUrl: './mini-basket.component.html',
  styleUrls: ['./mini-basket.component.scss']
})
export class MiniBasketComponent implements OnInit {
  selectedToursQty: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.selectedToursQty.subscribe((qty: number) => this.selectedToursQty = qty);
  }

}
