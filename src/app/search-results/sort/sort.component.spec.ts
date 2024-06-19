import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('function done', () => {
    it('should navigate to search-results page', () => {
      const spy = spyOn(router, 'navigateByUrl');
      component.done();
      expect(spy).toHaveBeenCalledWith('search-results');
    });
  });

  describe('function onSubmit', () => {
    it('should sort lowest-to-highest price', () => {
      let sortForm = {
        value: {
          sorting: 'lowest-to-highest',
        },
      };
      const spy = spyOn(component, 'lowestToHighest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });

    it('should sort highest-to-lowest price', () => {
      let sortForm = {
        value: {
          sorting: 'highest-to-lowest',
        },
      };
      const spy = spyOn(component, 'highestToLowest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });

    it('should sort shortest-to-longest duration', () => {
      let sortForm = {
        value: {
          sorting: 'shortest-to-longest',
        },
      };
      const spy = spyOn(component, 'shortestToLongest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });

    it('should sort longest-to-shortest duration', () => {
      let sortForm = {
        value: {
          sorting: 'longest-to-shortest',
        },
      };
      const spy = spyOn(component, 'longestToShortest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });

    it('should sort departure earlier-to-latest', () => {
      let sortForm = {
        value: {
          sorting: 'd-earlier-to-latest',
        },
      };
      const spy = spyOn(component, 'departureEarlierToLatest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });

    it('should sort arrival earlier-to-latest', () => {
      let sortForm = {
        value: {
          sorting: 'a-earlier-to-latest',
        },
      };
      const spy = spyOn(component, 'arrivalEarlierToLatest');
      component.onSubmit(sortForm);
      expect(spy).toHaveBeenCalled();
    });
  });
});
