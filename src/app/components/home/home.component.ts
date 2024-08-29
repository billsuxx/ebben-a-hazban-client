import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Places, Place } from '../../types/places.type';
import { createDirectus, DirectusClient, readItems, rest } from '@directus/sdk';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { NgFor } from '@angular/common';
import { PlaceService } from '../../services/place-service/place-service';
import { Store } from '@ngrx/store';
import { fetchPlacesAction } from '../../store/application.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  store: Store;

  placeList?: Place[];

  ngOnInit(): void {
    this.store.dispatch(fetchPlacesAction());
  }

  loadPlaces() {
    const client = createDirectus<Places>('http://localhost:8055').with(rest());

    fromPromise(client.request(readItems('Places'))).subscribe(
      (places: Place[]) => {
        this.placeList = places;
      }
    );
  }

  constructor(store: Store) {
    this.store = store;
  }
}
