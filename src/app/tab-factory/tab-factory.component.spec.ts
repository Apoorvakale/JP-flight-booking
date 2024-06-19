import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFactoryComponent } from './tab-factory.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

describe('TabFactoryComponent', () => {
  let component: TabFactoryComponent;
  let fixture: ComponentFixture<TabFactoryComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabFactoryComponent],
      imports: [RouterModule, AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TabFactoryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title as 'flight-booking'`, () => {
    const fixture = TestBed.createComponent(TabFactoryComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('flight-booking');
  });

  it(`should have appName as 'cxLoyalty'`, () => {
    const fixture = TestBed.createComponent(TabFactoryComponent);
    const app = fixture.componentInstance;
    expect(app.appName).toEqual('cxLoyalty');
  });

  describe('should test function openTab', () => {
    it('should route to flights component when chosen tab is Flights', () => {
      let tabName = 'Flights';
      const spy = spyOn(router, 'navigateByUrl');
      component.openTab(tabName);
      expect(spy).toHaveBeenCalledWith('flights-component');
    });

    it('should route to hotels component when chosen tab is Flights', () => {
      let tabName = 'Hotels';
      const spy = spyOn(router, 'navigateByUrl');
      component.openTab(tabName);
      expect(spy).toHaveBeenCalledWith('hotels-component');
    });

    it('should route to cars component when chosen tab is Flights', () => {
      let tabName = 'Cars';
      const spy = spyOn(router, 'navigateByUrl');
      component.openTab(tabName);
      expect(spy).toHaveBeenCalledWith('cars-component');
    });

    it('should route to activity component when chosen tab is Flights', () => {
      let tabName = 'Activity';
      const spy = spyOn(router, 'navigateByUrl');
      component.openTab(tabName);
      expect(spy).toHaveBeenCalledWith('activity-component');
    });

    it('should route to flights component by default', () => {
      let tabName = '';
      const spy = spyOn(router, 'navigateByUrl');
      component.openTab(tabName);
      expect(spy).toHaveBeenCalledWith('flights-component');
    });
  });
});
