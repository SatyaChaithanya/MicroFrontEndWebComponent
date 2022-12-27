import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneySelectionComponent } from './journey-selection/journey-selection.component';
import { BookedConfirmationComponent } from './booked-confirmation/booked-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneySelectionComponent,
    BookedConfirmationComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
