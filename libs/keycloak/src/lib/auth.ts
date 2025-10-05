import { Injectable } from '@angular/core';
import Keycloak, {
  KeycloakConfig,
  KeycloakInitOptions,
  KeycloakProfile,
} from 'keycloak-js';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  #keycloak: Keycloak | null = null;
  userProfile: KeycloakProfile | null = null;

  private async configure(
    config: string | KeycloakConfig,
    initOptions?: KeycloakInitOptions | undefined
  ) {
    if (this.#keycloak) return this.#keycloak;
    this.#keycloak = new Keycloak(config);
    await this.#keycloak.init(initOptions);
    return this.#keycloak;
  }
  static configuare(
    auth: Auth,
    config: string | KeycloakConfig,
    initOptions?: KeycloakInitOptions | undefined
  ) {
    auth.configure(config, initOptions);
  }

  public isAuthenticated() {
    return this.#keycloak?.authenticated ?? false;
  }

  public login() {
    this.#keycloak?.login();
  }
  public logout() {
    this.#keycloak?.logout();
  }
  public async userprofile(): Promise<KeycloakProfile | undefined> {
    return await this.#keycloak?.loadUserProfile();
  }
  public async userinfo() {
    return await this.#keycloak?.loadUserInfo();
  }
  get token(): string | undefined {
    return this.#keycloak?.token;
  }
}
