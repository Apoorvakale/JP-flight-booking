import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.css'],
})
export class TabFactoryComponent {
  title = 'flight-booking';
  appName = 'cxLoyalty';
  isActive: boolean = false;
  constructor(private router: Router) {}

  openTab(tabName: any) {
    switch (tabName) {
      case 'Flights':
        this.isActive = true;
        this.router.navigateByUrl('flights-component');
        break;
      case 'Hotels':
        this.router.navigateByUrl('hotels-component');
        break;
      case 'Cars':
        this.router.navigateByUrl('cars-component');
        break;
      case 'Activity':
        this.router.navigateByUrl('activity-component');
        break;
      default:
        this.router.navigateByUrl('flights-component');
        break;
    }
  }
}
