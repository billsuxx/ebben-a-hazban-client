export interface Place {
  readonly name: string;
  readonly image: string;
  readonly lat_lng: string;
  readonly status: string;
}

export interface Places {
  readonly Places: Place[];
}
