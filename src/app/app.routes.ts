import { Routes } from '@angular/router';

import { CreateComponent } from './places/create/create.component';
import { HomeComponent } from './home/home.component';

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
