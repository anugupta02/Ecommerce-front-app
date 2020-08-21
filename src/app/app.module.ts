import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ItemProductDetailsComponent } from './item-product-details/item-product-details.component';
import { TrSliderComponent } from './tr-slider/tr-slider.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TrFilterPanelComponent } from './tr-filter-panel/tr-filter-panel.component';
import { TrCardHorComponent } from './tr-card-hor/tr-card-hor.component';
import {MatChipsModule} from '@angular/material/chips';
import { ActionHandlerService } from './services/action-handler.service';
import { ApiServiceService } from './services/api-service.service';
import {SlideshowModule} from 'ng-simple-slideshow';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule} from '@angular/forms';
import { PaginationComponentComponent } from './pagination-component/pagination-component.component';


const appRoute = [

   {path : '' , component: HomeComponent},
   {path : 'signin' , component: SignInComponent},
   {path : 'signup', component: SignUpComponent},
   {path : 'home', component : HomeComponent},
   {path : 'category/:id', component: CategoryDetailsComponent},
   {path: 'product/:id', component: ItemProductDetailsComponent}

 ];



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    ProductItemComponent,
    ShopListComponent,
    ProfileComponent,
    NotificationListComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    CategoryDetailsComponent,
    ItemProductDetailsComponent,
    TrSliderComponent,
    TrFilterPanelComponent,
    TrCardHorComponent,
    FooterComponent,
    PaginationComponentComponent,

  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoute, { enableTracing: false } ),
    BrowserModule,
    NgbModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatListModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    SlideshowModule,
    ReactiveFormsModule

  ],
  providers: [ActionHandlerService, ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
