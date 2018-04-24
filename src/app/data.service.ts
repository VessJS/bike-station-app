import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {IStations} from "./station";

@Injectable()
export class DataService {
  //----------------- Properties -----------------
  private url: string = "http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe";

  //----------------- Helper Methods -----------------
  constructor(private _http: HttpClient) {
  }

  //----------------- Http Methods -----------------
  getStations(): Observable<IStations[]> {
    return this._http.get<IStations[]>(this.url);
  }
}
