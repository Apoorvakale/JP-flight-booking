import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';
import { ActivityComponent } from './activity/activity.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SortComponent } from './search-results/sort/sort.component';
import { FilterComponent } from './search-results/filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
  },
  {
    path: 'flights-component',
    component: FlightsComponent,
  },
  {
    path: 'hotels-component',
    component: HotelsComponent,
  },
  {
    path: 'cars-component',
    component: CarsComponent,
  },
  {
    path: 'activity-component',
    component: ActivityComponent,
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
  },
  {
    path: 'sort-page',
    component: SortComponent,
  },
  {
    path: 'filter-page',
    component: FilterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
