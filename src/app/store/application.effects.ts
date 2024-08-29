import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlaceService } from '../services/place-service/place-service';
import {
  fetchPlacesAction,
  fetchPlacesErrorAction,
  fetchPlacesSuccessAction,
} from './application.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Action } from '@ngrx/store';

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

  constructor(private actions$: Actions, private placeService: PlaceService) {
    this.actions$ = actions$;
    this.placeService = placeService;
  }
}
