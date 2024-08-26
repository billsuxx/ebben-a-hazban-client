import { Routes } from '@angular/router';

import { CreateComponent } from './components/places/create/create.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];
