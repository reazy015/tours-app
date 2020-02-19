import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITour, ITourClient} from './interfaces';
import {ToursService} from './tours.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tours: ITourClient[];

  constructor(private toursService: ToursService) {
  }

  ngOnInit(): void {
    this.toursService.getAllTours().subscribe((res: ITour[]) => {
      this.tours = res.map((tour: ITour) => {
        return {...tour, status: true};
      });
    });

    this.toursService.tourAddedToDB.subscribe((tour: ITour) => {
      this.tours.push({...tour, status: true});
    });
  }
}
