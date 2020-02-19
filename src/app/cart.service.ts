import {Injectable} from '@angular/core';
import {ITourClient} from './interfaces';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedToursList: ITourClient[] = [];
  selectedToursQty = new Subject<number>();

  constructor() {
  }

  addTourToCart(tour: ITourClient) {
    this.selectedToursList.push(tour);
    this.selectedToursQty.next(this.selectedToursList.length);
    tour.status = false;
  }
}
