import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAuth } from '@senior-setup-workspace-angular/keycloak';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAuth(
      {
        url: 'http://localhost:8080/',
        realm: 'book-social-networks',
        clientId: 'bsn',
      },
      {
        onLoad: 'login-required',
      }
    ),
  ],
};
