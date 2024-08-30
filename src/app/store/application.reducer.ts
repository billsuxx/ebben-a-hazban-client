import { ActionReducer, createReducer, on, State } from '@ngrx/store';
import { ApplicationState, PlaceListState } from '../interfaces/application.state.interface';
import {
  fetchPlacesAction,
  FetchPlacesErrorAction,
  fetchPlacesErrorAction,
  FetchPlacesSuccessAction,
  fetchPlacesSuccessAction,
} from './application.actions';
import { initialState } from './application.store';

export const placeListReducer = createReducer(
  initialState.list,

  on(fetchPlacesAction, (state: PlaceListState) => ({
    ...state,
    loading: true,
  })),

  on(
    fetchPlacesSuccessAction,
    (state: PlaceListState, { places }: FetchPlacesSuccessAction) => ({
      ...state,
      places,
      loading: false,
    })
  ),

  on(
    fetchPlacesErrorAction,
    (state: PlaceListState, { error }: FetchPlacesErrorAction) => ({
      ...state,
      loading: false,
      error,
    })
  )
);

export const placeCreateReducer = createReducer(
  initialState.create,

);