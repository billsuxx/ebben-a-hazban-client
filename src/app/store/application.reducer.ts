import { ActionReducer, createReducer, on, State } from '@ngrx/store';
import { ApplicationState } from '../interfaces/application.state.interface';
import {
  fetchPlacesAction,
  FetchPlacesErrorAction,
  fetchPlacesErrorAction,
  FetchPlacesSuccessAction,
  fetchPlacesSuccessAction,
} from './application.actions';
import { initialState } from './application.store';

export const placeReducer = createReducer(
  initialState,

  on(fetchPlacesAction, (state: ApplicationState) => ({
    ...state,
    loading: true,
  })),

  on(
    fetchPlacesSuccessAction,
    (state: ApplicationState, { places }: FetchPlacesSuccessAction) => ({
      ...state,
      places,
      loading: false,
    })
  ),

  on(
    fetchPlacesErrorAction,
    (state: ApplicationState, { error }: FetchPlacesErrorAction) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
