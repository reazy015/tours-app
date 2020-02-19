import { Component, OnInit } from '@angular/core';
import {ToursService} from '../tours.service';
import {ITourClient} from '../interfaces';

@Component({
  selector: 'app-tour-overview',
  templateUrl: './tour-overview.component.html',
  styleUrls: ['./tour-overview.component.scss']
})
export class TourOverviewComponent implements OnInit {
  currentTour: ITourClient;
  constructor(private toursService: ToursService) { }

  ngOnInit(): void {
    this.toursService.currentlySelectedTour.subscribe((tour: ITourClient) => {
      this.currentTour = tour;
    });
  }

}
