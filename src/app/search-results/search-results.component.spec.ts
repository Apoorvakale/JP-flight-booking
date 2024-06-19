import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { FlightsService } from '../flights.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let service: FlightsService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(FlightsService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('showAll should be defined and flightRoutes should be equal []', () => {
      service.userSelection = new BehaviorSubject({});
      service.showAll = new BehaviorSubject<boolean>(false);
      component.ngOnInit();
      expect(component.flightRoutes).toEqual([]);
      expect(component.showAll).toBeDefined();
    });

    it('showAll should be false and flightRoutes should not be empty', () => {
      service.userSelection = new BehaviorSubject({
        departure: 'PNQ',
        destination: 'AND',
        depart_date: new Date(2024, 6, 19),
        return_date: new Date(2024, 6, 23),
        travelers: 2,
        class: 'economy',
      });
      component.ngOnInit();
      expect(component.flightRoutes).not.toEqual([]);
      expect(component.showAll).toBeFalse();
    });
  });

  describe('function getDataDiff', () => {
    it('should return difference of 1 hour between the departure and arrival timestamp', () => {
      let startDate = new Date(2024, 6, 12, 4, 30);
      let endDate = new Date(2024, 6, 12, 5, 30);
      let result = component.getDataDiff(startDate, endDate);
      expect(result.hour).toEqual(1);
    });
  });

  describe('function openSort', () => {
    it('should navigate to sort page', () => {
      const spy = spyOn(router, 'navigateByUrl');
      component.openSort();
      expect(spy).toHaveBeenCalledWith('sort-page');
    });
  });

  describe('function openFilters', () => {
    it('should navigate to filter page', () => {
      const spy = spyOn(router, 'navigateByUrl');
      component.openFilters();
      expect(spy).toHaveBeenCalledWith('filter-page');
    });
  });

  describe('function back', () => {
    it('should navigate to flights page', () => {
      const spy = spyOn(router, 'navigateByUrl');
      component.back();
      expect(spy).toHaveBeenCalledWith('flights-component');
    });
  });
});
