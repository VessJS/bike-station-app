import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  getData() {
    return [
      {
        geometry: {
          coordinates: [
            16.9116229,
            52.4028313
          ],
          type: "Point"
        },
        id: "6157",
        type: "Feature",
        properties: {
          free_racks: "2",
          bikes: "16",
          label: "Poznań Główny",
          bike_racks: "18",
          updated: "2018-03-20 18:56"
        }
      },
      {
        geometry: {
          coordinates: [
            16.9128835,
            52.4105153
          ],
          type: "Point"
        },
        id: "6151",
        type: "Feature",
        properties: {
          free_racks: "5",
          bikes: "7",
          label: "Most Teatralny",
          bike_racks: "12",
          updated: "2018-03-20 18:56"
        }
      }
    ]
  }
}
