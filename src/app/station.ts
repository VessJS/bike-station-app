export interface IStations {
  id: string;
  type: string;
  geometry: IStationGeometry;
  properties: IStationProperties;
}

export interface IStationGeometry {
  coordinates: number[];
  type: string;
}

export interface IStationProperties {
  free_racks: string;
  bikes: string;
  label: string;
  bike_racks: string;
  updated: string;
}

