import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabFactoryComponent } from './tab-factory/tab-factory.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { ActivityComponent } from './activity/activity.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SortComponent } from './search-results/sort/sort.component';
import { FilterComponent } from './search-results/filter/filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TabFactoryComponent,
    FlightsComponent,
    HotelsComponent,
    CarsComponent,
    ActivityComponent,
    SearchResultsComponent,
    SortComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
