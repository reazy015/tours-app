import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {ITour, ITourClient} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  currentlySelectedTour = new Subject<ITourClient>();
  tourAddedToDB = new Subject<ITourClient>();
  constructor(private http: HttpClient) {

  }

  getAllTours() {
    return this.http.get('/api/tours');
  }

  addNewTour(tour: ITour) {
    return this.http.post('/api/tours', tour);
  }

  setTourOverview(tour: ITourClient) {
    this.currentlySelectedTour.next(tour);
  }

}
