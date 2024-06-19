import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import { TabFactoryComponent } from '../tab-factory/tab-factory.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsComponent, TabFactoryComponent],
      imports: [FormsModule, RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // xdescribe('should test function onSubmit', () => {
  //   it('should set validationErrors to an empty array', () => {
  //     let flightsForm = {
  //       value: {
  //         departure: 'PNQ',
  //         destination: 'AND',
  //         depart_date: new Date(2024, 6, 19),
  //         return_date: new Date(2024, 6, 23),
  //         travelers: 2,
  //         class: 'economy',
  //       },
  //     };
  //     spyOn(router, 'navigateByUrl').and.callThrough();
  //     component.onSubmit(flightsForm);
  //     expect(component.validationErrors.length).toEqual(0);
  //   });
  // });
});
