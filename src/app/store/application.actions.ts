import { Action, createAction, props } from '@ngrx/store';
import { Place } from '../types/places.type';

export interface FetchPlacesSuccessAction {
  readonly places: Place[];
}

export interface FetchPlacesErrorAction {
  readonly error: string;
}

export const fetchPlacesAction = createAction('[Place] Fetch Places');

export const fetchPlacesSuccessAction = createAction(
  '[Place] Fetch Places Success',
  props<FetchPlacesSuccessAction>()
);

export const fetchPlacesErrorAction = createAction(
  '[Place] Fetch Places Error',
  props<FetchPlacesErrorAction>()
);
