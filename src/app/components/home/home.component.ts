import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';

import { fetchPlacesAction } from '../../store/application.actions';
import {
  selectPlacesIsLoading,
  selectPlacesError,
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
  isLoading$ = this.store.select(selectPlacesIsLoading);
  error$ = this.store.select(selectPlacesError);


  ngOnInit(): void {
    this.store.dispatch(fetchPlacesAction());
  }

  constructor(private store: Store) {}
}
