import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';

import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { ViewProfilesComponent } from './Seller/view-profiles/view-profiles.component';
import { HomeComponent } from './Account/home/home.component';
import {HttpClientModule} from '@angular/common/http';

import { AccountService } from './Services/account.service';
import { ItemService } from './Services/item.service';
import { AdminService } from './Services/admin.service';
import { SellerService } from './Services/seller.service';
import { ViewCategoriesComponent } from './Admin/view-categories/view-categories.component';
import { ViewSubategoriesComponent } from './Admin/view-subategories/view-subategories.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    ViewProfileComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    AdminLandingPageComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    DailyReportComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    ViewProfilesComponent,
    HomeComponent,
    ViewCategoriesComponent,
    ViewSubategoriesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService,ItemService,AdminService,SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
