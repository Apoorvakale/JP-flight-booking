import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/flights.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  public dataToSort: any;
  public userSelectedData: any;
  constructor(
    private service: FlightsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.service.dataToDisplay.subscribe((res) => (this.dataToSort = res));
    this.service.userSelection.subscribe(
      (res) => (this.userSelectedData = res)
    );
  }

  public done() {
    this.router.navigateByUrl('search-results');
  }

  public onSubmit(sortForm: any) {
    switch (sortForm.value.sorting) {
      case 'lowest-to-highest':
        this.lowestToHighest();
        break;
      case 'highest-to-lowest':
        this.highestToLowest();
        break;
      case 'shortest-to-longest':
        this.shortestToLongest();
        break;
      case 'longest-to-shortest':
        this.longestToShortest();
        break;
      case 'd-earlier-to-latest':
        this.departureEarlierToLatest();
        break;
      case 'a-earlier-to-latest':
        this.arrivalEarlierToLatest();
        break;
      default:
        break;
    }
  }

  public back() {
    this.location.back();
  }

  public lowestToHighest() {
    let userSelectedClass = this.userSelectedData['travel-class'];
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (
          userSelectedClass == 'basic' &&
          this.dataToSort[i].fares.basic < this.dataToSort[j].fares.basic
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
        if (
          userSelectedClass == 'main' &&
          this.dataToSort[i].fares.main < this.dataToSort[j].fares.main
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        } else {
          if (
            this.dataToSort[i].fares.economy < this.dataToSort[j].fares.economy
          ) {
            let swap = this.dataToSort[i];
            this.dataToSort[i] = this.dataToSort[j];
            this.dataToSort[j] = swap;
          }
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }

  public highestToLowest() {
    let userSelectedClass = this.userSelectedData['travel-class'];
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (
          userSelectedClass == 'basic' &&
          this.dataToSort[i].fares.basic > this.dataToSort[j].fares.basic
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
        if (
          userSelectedClass == 'main' &&
          this.dataToSort[i].fares.main > this.dataToSort[j].fares.main
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        } else {
          if (
            this.dataToSort[i].fares.economy > this.dataToSort[j].fares.economy
          ) {
            let swap = this.dataToSort[i];
            this.dataToSort[i] = this.dataToSort[j];
            this.dataToSort[j] = swap;
          }
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }

  public shortestToLongest() {
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (
          this.dataToSort[i].end - this.dataToSort[i].start <
          this.dataToSort[j].end - this.dataToSort[j].start
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }

  public longestToShortest() {
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (
          this.dataToSort[i].end - this.dataToSort[i].start >
          this.dataToSort[j].end - this.dataToSort[j].start
        ) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }

  public departureEarlierToLatest() {
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (this.dataToSort[i].start < this.dataToSort[j].start) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }

  public arrivalEarlierToLatest() {
    for (let i = 0; i < this.dataToSort.length; i++) {
      for (let j = 0; j < this.dataToSort.length; j++) {
        if (this.dataToSort[i].end < this.dataToSort[j].end) {
          let swap = this.dataToSort[i];
          this.dataToSort[i] = this.dataToSort[j];
          this.dataToSort[j] = swap;
        }
      }
    }
    this.service.dataToDisplay.next(this.dataToSort);
    this.router.navigateByUrl('search-results');
  }
}
