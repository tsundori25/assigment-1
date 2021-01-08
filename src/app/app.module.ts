import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AuthInterceptor } from './shared/interceptor';
import { AdminComponent } from './admin/admin.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { PanitiaComponent } from './admin/dasboard/panitia/panitia.component';
import { PesertaComponent } from './admin/dasboard/peserta/peserta.component';
import { LurahComponent } from './admin/dasboard/lurah/lurah.component';
import { AsComponent } from './as/as.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CarouselComponent,
    AdminComponent,
    DasboardComponent,
    PanitiaComponent,
    PesertaComponent,
    LurahComponent,
    AsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    CategoryModule,
    FormsModule
    
  ],
  exports:[],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
