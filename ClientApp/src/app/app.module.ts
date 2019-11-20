import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {ModelModule} from "./models/model.module";
import { StoreModule } from "./store/store.module";
import { MovieSelectionComponent } from "./store/movieSelection.component";

import { RoutingConfig } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ModelModule,
    RoutingConfig,
    StoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
