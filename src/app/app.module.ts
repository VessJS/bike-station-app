import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(
      {
        apiKey: "AIzaSyBKxGsRgfzdgxZNP3Hv-JiUigBHIGmnisM"
      })
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
