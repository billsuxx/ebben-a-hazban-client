import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ApplicationState,
  PlaceListState,
} from '../interfaces/application.state.interface';

const selectListState = createFeatureSelector<PlaceListState>('list');

export const selectPlaces = createSelector(
  selectListState,
  (state: PlaceListState) => state.places
);

export const selectPlacesIsLoading = createSelector(
  selectListState,
  (state: PlaceListState) => state.loading
);

export const selectPlacesError = createSelector(
  selectListState,
  (state: PlaceListState) => state.error
);
