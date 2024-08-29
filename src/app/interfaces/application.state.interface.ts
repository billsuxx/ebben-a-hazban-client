import { Place } from '../types/places.type';

export interface ApplicationState {
  readonly places: Place[];
  readonly loading: boolean;
  readonly error: string;
}
