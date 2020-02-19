import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToursService} from '../tours.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.scss']
})
export class TourCreateComponent implements OnInit {
  newTourForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    location: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(private toursService: ToursService,
              private dialogRef: MatDialogRef<TourCreateComponent>,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onNewTourFormSubmitHandler() {
    this.toursService.addNewTour(this.newTourForm.value).subscribe((response: any) => {
      this.toursService.tourAddedToDB.next({
        name: response.name,
        description: response.description,
        location: response.location,
        price: response.price,
        status: true
      });
      this.newTourForm.reset();
      this.dialogRef.close();
      this.snackBar.open('New tour been added', 'Close', {
        duration: 2000,
      });
    }, error => {
      this.snackBar.open(`${error.message}. Please try later`, 'Close', {
        duration: 2000
      });
    });
  }

}
