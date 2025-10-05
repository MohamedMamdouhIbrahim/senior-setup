// provide-auth.ts
import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';
import { Auth } from './auth';

export function provideAuth(
  config: string | KeycloakConfig,
  initOptions?: KeycloakInitOptions
): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      const auth = inject(Auth);
      return Auth.configuare(auth, config, initOptions);
    }),
  ]);
}
