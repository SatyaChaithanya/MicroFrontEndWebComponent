import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booked-confirmation',
  templateUrl: './booked-confirmation.component.html',
  styleUrls: ['./booked-confirmation.component.css']
})
export class BookedConfirmationComponent {

  constructor(
    private readonly route: Router
  ) {}

  backHome() {
    this.route.navigateByUrl('/Trains');
  }
}
