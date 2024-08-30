import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Places, Place } from '../../types/places.type';
import { createDirectus, DirectusClient, readItems, rest } from '@directus/sdk';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { AsyncPipe, NgFor } from '@angular/common';
import { PlaceService } from '../../services/place-service/place-service';
import { Store } from '@ngrx/store';
import { fetchPlacesAction } from '../../store/application.actions';
import { ApplicationState } from '../../interfaces/application.state.interface';
import {
  selectIsLoading,
  selectPlaces,
} from '../../store/applicatoin.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  places$ = this.store.select(selectPlaces);
  isLoading$ = this.store.select(selectIsLoading);

  ngOnInit(): void {
    this.store.dispatch(fetchPlacesAction());
  }

  constructor(private store: Store) {}
}
