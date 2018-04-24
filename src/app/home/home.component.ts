import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import {IStations} from "../station";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'row'}
})
export class HomeComponent implements OnInit {

  public stations: IStations[] = [];

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getStations()
      .subscribe(data => {
        this.stations = data["features"];
      });
  }
}


