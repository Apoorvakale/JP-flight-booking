import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  public departureData: any[] = [
    { id: 'PNQ', name: 'Lohegaon Airport Pune, India' },
    { id: 'AND', name: 'Andaman Airport' },
    { id: 'BLR', name: 'Bangalore airport' },
  ];

  public destinationData: any = [
    { id: 'PNQ', name: 'Lohegaon Airport Pune, India' },
    { id: 'AND', name: 'Andaman Airport' },
    { id: 'BLR', name: 'Bangalore airport' },
  ];

  public validationErrors: any = [];

  constructor(private router: Router, private service: FlightsService) {}

  ngOnInit() {}

  public onSubmit(flightsForm: any) {
    this.validationErrors = [];
    let data = flightsForm.value;
    if (data.departure == '' || data.destination == '') {
      this.validationErrors.push('Departure or Destination is empty');
    } else {
      if (data.departure == data.destination)
        this.validationErrors.push('Departure and Destination cant be same');
    }
    if (data.depart_date == '' || data.return_date == '') {
      this.validationErrors.push('Choose date');
    }
    if (new Date(data.depart_date) > new Date(data.return_date)) {
      this.validationErrors.push('Return date cant be before Depart date');
    }
    if (data.travelers == '') {
      this.validationErrors.push('Choose number of travellers');
    }
    if (this.validationErrors.length == 0) {
      this.service.userSelection.next(flightsForm.value);
      this.service.dataToDisplay.next([]);
      this.service.showAll.next(false);
      this.router.navigateByUrl('search-results');
    }
  }
}
