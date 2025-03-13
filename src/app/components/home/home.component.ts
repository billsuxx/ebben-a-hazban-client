import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { fetchPlacesAction } from '../../store/application.actions';
import {
  selectPlacesIsLoading,
  selectPlacesError,
  selectPlaces,
} from '../../store/applicatoin.selectors';
import { ListComponent } from '../places/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  places$ = this.store.select(selectPlaces);
  isLoading$ = this.store.select(selectPlacesIsLoading);
  error$ = this.store.select(selectPlacesError);

  ngOnInit(): void {
    this.store.dispatch(fetchPlacesAction());
  }

  constructor(private store: Store) {}
}
