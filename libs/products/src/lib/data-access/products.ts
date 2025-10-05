import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Observable, share } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  public products$ = this.getProducts();

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://api.restful-api.dev/objects')
      .pipe(share());
  }
}
