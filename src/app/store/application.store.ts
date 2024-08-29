import { ActionReducer } from '@ngrx/store';
import { ApplicationState } from '../interfaces/application.state.interface';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initialState: ApplicationState = {
  places: [],
  loading: false,
  error: '',
};
