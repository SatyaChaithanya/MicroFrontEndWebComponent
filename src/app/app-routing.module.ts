import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookedConfirmationComponent } from './booked-confirmation/booked-confirmation.component';
import { JourneySelectionComponent } from './journey-selection/journey-selection.component';

const routes: Routes = [
  {
    path: 'Trains',
    component: JourneySelectionComponent,
    data: { title: 'Journeys' }
  },
  {
    path: 'booked-Confirmation',
    component: BookedConfirmationComponent,
    data: { title: 'Booked Confirmations'}
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./micro-frontends/bookings-host.module').then((m) => m.BookingsHostModule),
  },
  {
    path: '',
    redirectTo: 'Trains',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
