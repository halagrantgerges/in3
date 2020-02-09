import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductSearchBarComponent } from "./product-search-bar/product-search-bar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";
import { ProductsMobileComponent } from "./products-mobile/products-mobile.component";
import { IgxListModule, IgxIconModule } from "igniteui-angular";
import { IgxFilterModule, IgxInputGroupModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductSearchBarComponent,
    ProductsMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    IgxListModule,
    IgxFilterModule,
    IgxInputGroupModule,
    IgxIconModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
