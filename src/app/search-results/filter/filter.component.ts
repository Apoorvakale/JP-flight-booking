import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FlightsService } from 'src/app/flights.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public formData: any;
  // public filterFormData = new BehaviorSubject<any>({});

  public searchResults: any;
  public filtered: any = [];
  public minPrice: number | undefined;
  public maxPrice: number | undefined;
  public booking: string | undefined;
  public isReset: boolean = false;

  constructor(
    private location: Location,
    private service: FlightsService,
    private router: Router
  ) {
    this.loadFilterValues();
  }

  ngOnInit() {
    this.service.userSelection
      .pipe(take(1))
      .subscribe((res) => (this.formData = res));
    this.searchResults = this.service.getFlightRoutes(
      this.formData.departure,
      this.formData.destination
    );
  }

  public back() {
    this.resetAll();
    this.location.back();
  }

  public apply(filterForm: any) {
    this.saveFilterValues();
    console.log('clicked apply');
    let data = filterForm.value;
    // this.filterFormData.next(data);
    this.searchResults.forEach((result: any) => {
      if (data.booking == 'basic') {
        if (
          result.fares.basic >= Number(data.minimum) &&
          result.fares.basic <= Number(data.maximum)
        ) {
          this.filtered.push(result);
        }
      } else if (data.booking == 'main') {
        if (
          result.fares.main >= Number(data.minimum) &&
          result.fares.main <= Number(data.maximum)
        ) {
          this.filtered.push(result);
        }
      } else {
        if (
          result.fares.economy >= Number(data.minimum) &&
          result.fares.economy <= Number(data.maximum)
        ) {
          this.filtered.push(result);
        }
      }
    });
    if (this.filtered.length == 0) {
      console.log('setting show all to true');
      this.service.showAll.next(true);
    }
    this.service.dataToDisplay.next(this.filtered);
    this.router.navigate(['search-results'], {
      state: { navigatedFrom: 'filter-page' },
    });
  }

  resetAll() {
    localStorage.setItem(
      'filterValues',
      JSON.stringify({
        minPrice: 0,
        maxPrice: 0,
        booking: 'economy',
      })
    );
    console.log('setting show all to false');
    this.service.showAll.next(false);
    this.service.dataToDisplay.next([]);
    this.router.navigateByUrl('search-results');
  }

  saveFilterValues() {
    localStorage.setItem(
      'filterValues',
      JSON.stringify({
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        booking: this.booking,
      })
    );
  }

  loadFilterValues() {
    const storedValues = localStorage.getItem('filterValues');
    if (storedValues) {
      const values = JSON.parse(storedValues);
      this.minPrice = values.minPrice;
      this.maxPrice = values.maxPrice;
      this.booking = values.booking;
    }
  }
}
