import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '@senior-setup-workspace-angular/keycloak';
export const isAuthenticatedGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  if (!auth.isAuthenticated()) {
    auth.login();
    return false;
  }

  return true;
};
