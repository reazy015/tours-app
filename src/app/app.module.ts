import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TourCardComponent} from './tour-card/tour-card.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TourOverviewComponent} from './tour-overview/tour-overview.component';
import {MiniBasketComponent} from './mini-basket/mini-basket.component';
import {TourBuyButtonComponent} from './tour-buy-button/tour-buy-button.component';
import {TourCreateComponent} from './tour-create/tour-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TourDialogTriggerComponent} from './tour-dialog-trigger/tour-dialog-trigger.component';
import {httpInterceptorProvider} from './http-interceptors';
import {AuthShowDirective} from './directives/auth-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    TourCardComponent,
    TourOverviewComponent,
    MiniBasketComponent,
    TourBuyButtonComponent,
    TourCreateComponent,
    TourDialogTriggerComponent,
    AuthShowDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
