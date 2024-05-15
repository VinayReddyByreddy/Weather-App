import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppModule)],
}).catch(err => console.error(err));
