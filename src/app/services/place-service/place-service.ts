import { Injectable } from '@angular/core';
import { createDirectus, createItem, readItems, rest } from '@directus/sdk';
import { Place, Places } from '../../types/places.type';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { from, Observable } from 'rxjs';

@Injectable()
export class PlaceService {
  getAll(): Observable<any> {
    const client = createDirectus<Places>('http://localhost:8055').with(rest());
    return from(client.request(readItems('Places')));
  }

  create(place: Place): Observable<any> {
    const client = createDirectus('http://localhost:8055').with(rest());

    return from(client.request(createItem('Places', place)));
  }
}
