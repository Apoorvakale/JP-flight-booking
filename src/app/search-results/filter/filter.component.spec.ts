import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { FlightsService } from 'src/app/flights.service';
import { Router } from '@angular/router';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let service: FlightsService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(FlightsService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('function ngOnInit', () => {
    it('should get flight routes', () => {
      const spy = spyOn(service, 'getFlightRoutes');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('function back', () => {
    it('should reset when navigated back', () => {
      const spy = spyOn(component, 'resetAll');
      component.back();
      expect(spy).toHaveBeenCalled();
    });
  });

  // describe('function apply', () => {
  //   it('should apply filtering to search results', () => {
  //     let filterForm = {
  //       value: {
  //         booking: 'basic',
  //         minimum: 500,
  //         maximum: 1000,
  //       },
  //     };
  //     const spy = spyOn(component, 'saveFilterValues');
  //     spyOn(router, 'navigateByUrl').and.callThrough();
  //     component.searchResults = [
  //       {
  //         source: 'PNQ',
  //         destination: 'BLR',
  //         start: new Date(2000, 6, 6, 5, 45),
  //         end: new Date(2000, 6, 6, 7, 30),
  //         airlines: 'Air India',
  //         fares: {
  //           economy: 500,
  //           basic: 800,
  //           main: 1000,
  //         },
  //         seats: {
  //           economy: 5,
  //           basic: 10,
  //           main: 10,
  //         },
  //       },
  //       {
  //         source: 'PNQ',
  //         destination: 'BLR',
  //         start: new Date(2000, 6, 6, 10, 50),
  //         end: new Date(2000, 6, 6, 12, 30),
  //         airlines: 'Akasa Air',
  //         fares: {
  //           economy: 800,
  //           basic: 1000,
  //           main: 1500,
  //         },
  //         seats: {
  //           economy: 5,
  //           basic: 10,
  //           main: 10,
  //         },
  //       },
  //     ];
  //     component.apply(filterForm);
  //     expect(spy).toHaveBeenCalled();
  //     expect(component.filtered).toBeDefined();
  //   });
  // });

  describe('function resetAll', () => {
    it('should navigate to search-results page after reset', () => {
      const spy = spyOn(router, 'navigateByUrl');
      component.resetAll();
      expect(spy).toHaveBeenCalledWith('search-results');
    });
  });
});
