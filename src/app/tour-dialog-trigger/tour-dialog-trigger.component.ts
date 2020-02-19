import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TourCreateComponent} from '../tour-create/tour-create.component';

@Component({
  selector: 'app-tour-dialog-trigger',
  templateUrl: './tour-dialog-trigger.component.html',
  styleUrls: ['./tour-dialog-trigger.component.scss']
})
export class TourDialogTriggerComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onAddNewTourHandler(): void {
    const dialogRef = this.dialog.open(TourCreateComponent, {
      width: '450px'
    });
  }
}
