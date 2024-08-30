import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlaceService } from '../services/place-service/place-service';
import {
  CreatePlaceAction,
  createPlaceAction,
  createPlaceErrorAction,
  createPlaceSuccessAction,
  fetchPlacesAction,
  fetchPlacesErrorAction,
  fetchPlacesSuccessAction,
} from './application.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ApplicationEffects {
  loadPlaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPlacesAction),
      mergeMap(() =>
        this.placeService.getAll().pipe(
          map((places) => fetchPlacesSuccessAction({ places })),
          catchError((error) =>
            of(fetchPlacesErrorAction({ error: error.message }))
          )
        )
      )
    )
  );

  createPlace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPlaceAction),
      mergeMap(({ place }: CreatePlaceAction) =>
        this.placeService.create(place).pipe(
          map((places) => createPlaceSuccessAction({ place })),
          catchError((error) =>
            of(createPlaceErrorAction({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private placeService: PlaceService) {}
}
