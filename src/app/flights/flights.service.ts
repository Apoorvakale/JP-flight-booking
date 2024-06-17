import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  public dataToDisplay = new BehaviorSubject<any>([]);
  public userSelection = new BehaviorSubject<any>({});
  public showAll = new BehaviorSubject<boolean>(false);
  public allRoutes: any = [
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
    {
      source: 'PNQ',
      destination: 'BLR',
      start: new Date(2000, 6, 6, 1, 10),
      end: new Date(2000, 6, 6, 3, 40),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
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
      start: new Date(2000, 6, 6, 19, 10),
      end: new Date(2000, 6, 6, 20, 50),
      airlines: 'Indigo airlines',
      fares: {
        economy: 600,
        basic: 900,
        main: 1800,
      },
      seats: {
        economy: 5,
        basic: 10,
        main: 10,
      },
    },
    {
      source: 'BLR',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 19, 10),
      end: new Date(2000, 6, 6, 20, 50),
      airlines: 'Indigo airlines',
      fares: {
        economy: 400,
        basic: 600,
        main: 1100,
      },
      seats: {
        economy: 4,
        basic: 13,
        main: 15,
      },
    },
    {
      source: 'BLR',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 1, 10),
      end: new Date(2000, 6, 6, 3, 40),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
        main: 1000,
      },
      seats: {
        economy: 7,
        basic: 11,
        main: 5,
      },
    },
    {
      source: 'BLR',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 5, 45),
      end: new Date(2000, 6, 6, 7, 30),
      airlines: 'Star Asia',
      fares: {
        economy: 700,
        basic: 900,
        main: 1600,
      },
      seats: {
        economy: 3,
        basic: 13,
        main: 18,
      },
    },
    {
      source: 'BLR',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 10, 50),
      end: new Date(2000, 6, 6, 12, 30),
      airlines: 'Akasa Air',
      fares: {
        economy: 800,
        basic: 1000,
        main: 1500,
      },
      seats: {
        economy: 15,
        basic: 20,
        main: 20,
      },
    },
    {
      source: 'PNQ',
      destination: 'AND',
      start: new Date(2000, 6, 6, 5, 45),
      end: new Date(2000, 6, 6, 7, 20),
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
      destination: 'AND',
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
    {
      source: 'PNQ',
      destination: 'AND',
      start: new Date(2000, 6, 6, 1, 10),
      end: new Date(2000, 6, 6, 3, 25),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
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
      destination: 'AND',
      start: new Date(2000, 6, 6, 19, 10),
      end: new Date(2000, 6, 6, 21, 20),
      airlines: 'Indigo airlines',
      fares: {
        economy: 600,
        basic: 900,
        main: 1800,
      },
      seats: {
        economy: 5,
        basic: 10,
        main: 10,
      },
    },
    {
      source: 'AND',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 17, 50),
      end: new Date(2000, 6, 6, 19, 20),
      airlines: 'Indigo airlines',
      fares: {
        economy: 400,
        basic: 600,
        main: 1100,
      },
      seats: {
        economy: 4,
        basic: 13,
        main: 15,
      },
    },
    {
      source: 'AND',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 2, 10),
      end: new Date(2000, 6, 6, 4, 30),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
        main: 1000,
      },
      seats: {
        economy: 7,
        basic: 11,
        main: 5,
      },
    },
    {
      source: 'AND',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 5, 45),
      end: new Date(2000, 6, 6, 7, 30),
      airlines: 'Star Asia',
      fares: {
        economy: 700,
        basic: 900,
        main: 1600,
      },
      seats: {
        economy: 3,
        basic: 13,
        main: 18,
      },
    },
    {
      source: 'AND',
      destination: 'PNQ',
      start: new Date(2000, 6, 6, 18, 50),
      end: new Date(2000, 6, 6, 20, 30),
      airlines: 'Akasa Air',
      fares: {
        economy: 800,
        basic: 1000,
        main: 1500,
      },
      seats: {
        economy: 15,
        basic: 20,
        main: 20,
      },
    },
    {
      source: 'BLR',
      destination: 'AND',
      start: new Date(2000, 6, 6, 5, 45),
      end: new Date(2000, 6, 6, 7, 20),
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
      source: 'BLR',
      destination: 'AND',
      start: new Date(2000, 6, 6, 10, 50),
      end: new Date(2000, 6, 6, 13, 30),
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
    {
      source: 'BLR',
      destination: 'AND',
      start: new Date(2000, 6, 6, 1, 10),
      end: new Date(2000, 6, 6, 3, 25),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
        main: 1000,
      },
      seats: {
        economy: 5,
        basic: 10,
        main: 10,
      },
    },
    {
      source: 'BLR',
      destination: 'AND',
      start: new Date(2000, 6, 6, 19, 10),
      end: new Date(2000, 6, 6, 21, 20),
      airlines: 'Indigo airlines',
      fares: {
        economy: 600,
        basic: 900,
        main: 1800,
      },
      seats: {
        economy: 5,
        basic: 10,
        main: 10,
      },
    },
    {
      source: 'AND',
      destination: 'BLR',
      start: new Date(2000, 6, 6, 17, 50),
      end: new Date(2000, 6, 6, 19, 20),
      airlines: 'Indigo airlines',
      fares: {
        economy: 400,
        basic: 600,
        main: 1100,
      },
      seats: {
        economy: 4,
        basic: 13,
        main: 15,
      },
    },
    {
      source: 'AND',
      destination: 'BLR',
      start: new Date(2000, 6, 6, 2, 10),
      end: new Date(2000, 6, 6, 4, 30),
      airlines: 'Indigo airlines',
      fares: {
        economy: 300,
        basic: 500,
        main: 1000,
      },
      seats: {
        economy: 7,
        basic: 11,
        main: 5,
      },
    },
    {
      source: 'AND',
      destination: 'BLR',
      start: new Date(2000, 6, 6, 5, 45),
      end: new Date(2000, 6, 6, 7, 30),
      airlines: 'Star Asia',
      fares: {
        economy: 700,
        basic: 900,
        main: 1600,
      },
      seats: {
        economy: 3,
        basic: 13,
        main: 18,
      },
    },
    {
      source: 'AND',
      destination: 'BLR',
      start: new Date(2000, 6, 6, 18, 50),
      end: new Date(2000, 6, 6, 20, 30),
      airlines: 'Akasa Air',
      fares: {
        economy: 800,
        basic: 1000,
        main: 1500,
      },
      seats: {
        economy: 15,
        basic: 20,
        main: 20,
      },
    },
  ];

  constructor() {}

  public getFlightRoutes(source: string, destination: string) {
    let routes: any = [];
    this.allRoutes.filter((route: any) => {
      if (route.source == source && route.destination == destination) {
        routes.push(route);
      }
    });
    return routes;
  }
}
