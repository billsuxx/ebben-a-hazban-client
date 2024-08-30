import { ActionReducer } from '@ngrx/store';
import { ApplicationState } from '../interfaces/application.state.interface';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initialState: ApplicationState = {
  list: {
    places: [],
    loading: false,
    error: '',
  },
  create: {
    loading: false,
    error: ''
   }
};
