/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainComponent } from './app/containers/main/main.component';

bootstrapApplication(MainComponent, appConfig).catch((err) =>
  console.error(err)
);
