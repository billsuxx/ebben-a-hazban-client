type PointType = 'Point';

export interface Point {
  readonly type: PointType;
  readonly coordinates: object;
}

export interface Place {
  readonly name: string;
  readonly image?: string;
  readonly lat_lng: Point;
  readonly status: string;
  readonly date_created?: string;
  readonly date_updated?: string;
  readonly id?: number;
  readonly user_created?: number;
}

export interface Places {
  readonly Places: Place[];
}
