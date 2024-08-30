import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from '../interfaces/application.state.interface';

const selectPlaceState = createFeatureSelector<ApplicationState>('place');

export const selectPlaces = createSelector(
  selectPlaceState,
  (state: ApplicationState) => state.places
);

export const selectIsLoading = createSelector(
  selectPlaceState,
  (state: ApplicationState) => state.loading
);
