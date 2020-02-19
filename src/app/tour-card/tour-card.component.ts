import {Component, Input, OnInit} from '@angular/core';
import {ITourClient} from '../interfaces';
import {ToursService} from '../tours.service';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() tour: ITourClient;

  constructor(private toursService: ToursService) {
  }

  ngOnInit(): void {
  }

  onSetTourOverviewHandler(event): void {
    event.stopPropagation();
    this.toursService.setTourOverview(this.tour);
  }

}
