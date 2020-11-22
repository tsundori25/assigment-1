import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JacketComponent } from './jacket/jacket.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';

const routes: Routes = [
  {path: 'jacket', component: JacketComponent},
  {path: 't-shirt', component: TShirtComponent},
  {path: 'shoes', component: ShoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
