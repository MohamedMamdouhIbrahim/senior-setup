import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CoreActions from './core.actions';
import * as CoreSelectors from './core.selectors';

@Injectable()
export class CoreFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CoreSelectors.selectCoreLoaded));
  allCore$ = this.store.pipe(select(CoreSelectors.selectAllCore));
  selectedCore$ = this.store.pipe(select(CoreSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CoreActions.initCore());
  }
}
