import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomMaterialModule } from './material.module';
import {
  MatBadgeModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule, MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTabsModule,
} from '@angular/material';
import { ScoreComponent } from './components/score/score.component';
import { BasketComponent } from './components/basket/basket.component';
import {NgxsModule} from '@ngxs/store';
import { ItemState } from './state/basket.state';





@NgModule( {
    declarations: [
        AppComponent,
        ScoreComponent,
        BasketComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    LoadingBarModule,
    ToastrModule.forRoot(),
    LoadingBarRouterModule,
    MatTabsModule,
    LoadingBarHttpClientModule,
    MatProgressBarModule,
    MatListModule,
    MatBadgeModule,
    NgxsModule.forRoot([ ItemState ]),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
  ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
