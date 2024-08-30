import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState, PlaceListState } from '../interfaces/application.state.interface';

const selectPlaceState = createFeatureSelector<ApplicationState>('place');

export const selectList = createSelector(
  selectPlaceState,
  (state: ApplicationState) => state.list
)

export const selectCreate = createSelector(
  selectPlaceState,
  (state: ApplicationState) => state.list
)

export const selectPlaces = createSelector(
  selectList,
  (state: PlaceListState) => state.places
);

export const selectPlacesIsLoading = createSelector(
  selectList,
  (state: PlaceListState) => state.loading
);


export const selectPlacesError = createSelector(
  selectList,
  (state: PlaceListState) => state.error
);
