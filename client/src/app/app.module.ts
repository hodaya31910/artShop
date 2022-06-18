import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Directive, Renderer2, ElementRef, OnInit, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { ContactComponent } from './pages/contact/contact.component';
// import 'sweetalert2/src/sweetalert2.scss';
import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import {MatFormFieldModule} from '@angular/material/form-field';

import 'sweetalert2/src/sweetalert2.scss';

import {MatAutocompleteModule,
//   MatBadgeModule,
//   MatBottomSheetModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatDividerModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatStepperModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
//   MatTreeModule,
//   MatButtonModule,
 } from '@angular/material';
import { LogInRegisterComponent } from './log-in-register/log-in-register.component';
import { ShopingComponent } from './shoping/shoping.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LogInRegisterComponent,
    ShopingComponent,
    CartComponent,
    PaymentComponent,
    ProductComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    //   MatAutocompleteModule,
    //   MatBadgeModule,
    //   MatBottomSheetModule,
    //   MatButtonModule,
    //   MatButtonToggleModule,
    //   MatCardModule,
    //   MatCheckboxModule,
    //   MatChipsModule,
    //   MatDatepickerModule,
    //   MatDialogModule,
    //   MatDividerModule,
    //   MatExpansionModule,
    //   MatGridListModule,
    //   MatIconModule,
    //   MatInputModule,
    //   MatListModule,
    //   MatMenuModule,
    //   MatNativeDateModule,
    //   MatPaginatorModule,
    //   MatProgressBarModule,
    //   MatProgressSpinnerModule,
    //   MatRadioModule,
    //   MatRippleModule,
    //   MatSelectModule,
    //   MatSidenavModule,
    //   MatSliderModule,
    //   MatSlideToggleModule,
    //   MatSnackBarModule,
    //   MatSortModule,
    //   MatStepperModule,
    //   MatTableModule,
    //   MatTabsModule,
    //   MatToolbarModule,
    //   MatTooltipModule,
    //   MatTreeModule,
    // MatInputModule,
    //     MatFormFieldModule,
    //     MatProgressSpinnerModule,
    //     MatProgressBarModule,
    //      MatIconModule,
    //     BrowserModule,
    //     MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
