import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromActions from './actions';
@Injectable()
export class ArticleEffects {
  private readonly actions$ = inject(Actions);
}
