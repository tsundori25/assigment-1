import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { JacketComponent } from './jacket/jacket.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { ShoesComponent } from './shoes/shoes.component';


@NgModule({
  declarations: [JacketComponent, TShirtComponent, ShoesComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
