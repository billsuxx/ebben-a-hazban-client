import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { ApplicationEffects } from './store/application.effects';
import { provideStore } from '@ngrx/store';

import { provideStoreDevtools } from '@ngrx/store-devtools';

import { placeReducer } from './store/application.reducer';
import { PlaceService } from './services/place-service/place-service';

export const appConfig: ApplicationConfig = {
  providers: [
    PlaceService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      place: placeReducer,
    }),
    provideEffects(ApplicationEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
