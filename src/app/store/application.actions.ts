import { Action, createAction, props } from '@ngrx/store';
import { Place } from '../types/places.type';

export interface FetchPlacesSuccessAction {
  readonly places: Place[];
}

export interface FetchPlacesErrorAction {
  readonly error: string;
}

export interface CreatePlaceAction {
  readonly place: Place;
}

export interface CreatePlaceSuccessAction {
  readonly place: Place;
}

export interface CreatePlaceErrorAction {
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

export const createPlaceAction = createAction(
  '[Place] Create Places',
  props<CreatePlaceAction>()
);

export const createPlaceSuccessAction = createAction(
  '[Place] Create Place Success',
  props<CreatePlaceSuccessAction>()
);

export const createPlaceErrorAction = createAction(
  '[Place] Create Places Error',
  props<CreatePlaceErrorAction>()
);
