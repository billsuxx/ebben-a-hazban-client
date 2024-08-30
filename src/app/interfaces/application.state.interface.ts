import { Place } from '../types/places.type';

export interface PlaceListState {
  readonly places: Place[];
  readonly loading: boolean;
  readonly error: string;
}

export interface PlaceCreateState {
  readonly place?: Place;
  readonly loading: boolean;
  readonly error: string;
}
export interface ApplicationState {
  list: PlaceListState,
  create: PlaceCreateState   
}
