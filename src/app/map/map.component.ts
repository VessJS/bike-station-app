import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  public mapPoints = [];

  latitude: number = 52.406374;
  longitude: number = 16.9251681;
  locationChosen: boolean = false;

  // onChoseLocation(event) {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }

  ngOnInit() {
    this.mapPoints = this._dataService.getData();
    console.log(this.mapPoints);
  }

}
