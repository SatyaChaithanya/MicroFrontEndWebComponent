import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey-selection',
  templateUrl: './journey-selection.component.html',
  styleUrls: ['./journey-selection.component.css']
})
export class JourneySelectionComponent {

  constructor(
    private readonly route: Router
  ) {}

  trainsList = [
    {name: 'Godavari Express', id: 1},
    {name: 'Goutami Express', id: 2},
    {name: 'Seshadri Express', id: 3},
    {name: 'Narayanadri Express', id: 4}
  ];

  onBook(item: any) {
    console.log('On Book fn called!!');
    this.route.navigate(['/bookings/journey', item.id]);
  }
}
