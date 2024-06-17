import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FlightsService } from '../flights/flights.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  public recievedData: any;
  public routeData: any;
  public flightRoutes: any;
  // public isSort = false;
  public navigatedFrom: string | undefined;
  public formData: any;
  public showAll = false;

  constructor(private router: Router, private service: FlightsService) {}

  ngOnInit() {
    this.service.userSelection
      .pipe(take(1))
      .subscribe((flightForm: any) => (this.formData = flightForm));
    this.service.dataToDisplay.pipe(take(1)).subscribe((res) => {
      if (res.length > 0) {
        this.flightRoutes = res;
      } else {
        this.service.showAll.pipe(take(1)).subscribe((show) => {
          this.showAll = show;
        });
        this.flightRoutes = this.service.getFlightRoutes(
          this.formData.departure,
          this.formData.destination
        );
        this.flightRoutes.forEach((route: any) => {
          let duration = this.getDataDiff(
            new Date(route.start),
            new Date(route.end)
          );
          route.duration = duration;
        });
        this.service.dataToDisplay.next(this.flightRoutes);
      }
    });
  }

  public getDataDiff(startDate: any, endDate: any) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    var minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    var seconds =
      Math.floor(diff / 1000) -
      (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);
    return { day: days, hour: hours, minute: minutes, second: seconds };
  }

  public openSort() {
    this.router.navigateByUrl('sort-page');
  }

  public openFilters() {
    this.router.navigateByUrl('filter-page');
  }

  public back() {
    this.service.dataToDisplay.next([]);
    this.router.navigateByUrl('flights-component');
    localStorage.setItem(
      'filterValues',
      JSON.stringify({
        minPrice: 0,
        maxPrice: 0,
        booking: 'economy',
      })
    );
  }
}
