import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../data.service";
import {IStations} from "../station";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public stations: IStations[] = [];
  public station: IStations;


  constructor(private route: ActivatedRoute, private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getStations()
      .subscribe(data => {
        this.stations = data["features"];
        this.route.params.subscribe(res => {
          for (let i = 0; i < this.stations.length; i++) {
            if (this.stations[i].id === res.id) {
              this.station = this.stations[i];
              break
            }
          }
          console.log("WE HAVE BEAUTIFUL DAY TODAY! ---- UPDATE TIME", this.station.properties.updated);
        });
      });
  }
}
