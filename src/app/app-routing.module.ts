import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
// import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductComponent},
  // {path:'profile/:id', component: ProfileComponent},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {path:'',redirectTo:'home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
