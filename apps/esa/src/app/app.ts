import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '@senior-setup-workspace-angular/products';

//check multi intry point because right now we import every thing in the lib which is wrong
@Component({
  imports: [RouterModule, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'esa';
  productsService = inject(Products);
  products$ = this.productsService.products$;
}
