import {Component, OnInit} from '@angular/core';
import {ITour, ITourClient} from './interfaces';
import {ToursService} from './tours.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tours: ITourClient[];

  constructor(private toursService: ToursService,
              private authService: AuthService) {
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

    // this.authService.login('tourstest@email.com', '313373vladimir').subscribe(res => console.log(res));
  }
}
