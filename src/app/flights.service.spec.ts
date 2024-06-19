import { TestBed } from '@angular/core/testing';

import { FlightsService } from './flights.service';
import { RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsComponent],
      imports: [RouterModule],
    }).compileComponents();
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('function getFlightRoutes', () => {
    it('should return routes available based on user selection', () => {
      service.allRoutes = [
        {
          source: 'PNQ',
          destination: 'BLR',
          start: new Date(2000, 6, 6, 5, 45),
          end: new Date(2000, 6, 6, 7, 30),
          airlines: 'Air India',
          fares: {
            economy: 500,
            basic: 800,
            main: 1000,
          },
          seats: {
            economy: 5,
            basic: 10,
            main: 10,
          },
        },
        {
          source: 'PNQ',
          destination: 'BLR',
          start: new Date(2000, 6, 6, 10, 50),
          end: new Date(2000, 6, 6, 12, 30),
          airlines: 'Akasa Air',
          fares: {
            economy: 800,
            basic: 1000,
            main: 1500,
          },
          seats: {
            economy: 5,
            basic: 10,
            main: 10,
          },
        },
      ];
      let result = service.getFlightRoutes('PNQ', 'BLR');
      expect(result).toBeDefined();
    });

    it('should return routes = [] when no routes are available for the selected source and destination', () => {
      service.allRoutes = [
        {
          source: 'PNQ',
          destination: 'BLR',
          start: new Date(2000, 6, 6, 5, 45),
          end: new Date(2000, 6, 6, 7, 30),
          airlines: 'Air India',
          fares: {
            economy: 500,
            basic: 800,
            main: 1000,
          },
          seats: {
            economy: 5,
            basic: 10,
            main: 10,
          },
        },
        {
          source: 'PNQ',
          destination: 'BLR',
          start: new Date(2000, 6, 6, 10, 50),
          end: new Date(2000, 6, 6, 12, 30),
          airlines: 'Akasa Air',
          fares: {
            economy: 800,
            basic: 1000,
            main: 1500,
          },
          seats: {
            economy: 5,
            basic: 10,
            main: 10,
          },
        },
      ];
      let result = service.getFlightRoutes('PNQ', 'AND');
      expect(result).toEqual([]);
    });
  });
});
