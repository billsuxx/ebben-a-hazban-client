import { Injectable } from '@angular/core';
import { createDirectus, readItems, rest } from '@directus/sdk';
import { Place, Places } from '../../types/places.type';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { from, Observable } from 'rxjs';

@Injectable()
export class PlaceService {
  getAll(): Observable<any> {
    const client = createDirectus<Places>('http://localhost:8055').with(rest());

    return from(client.request(readItems('Places')));
  }
}
