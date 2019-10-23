import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';
import { Config } from "./provider/Config";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { UserService } from "./provider/user.service";
import { CallsService } from "./provider/calls.service";
import { RemandingCallsCreditComponent } from "./components/remanding-calls-credit/remanding-calls-credit.component";
import { RemandingCallsCreditService } from "./components/remanding-calls-credit/remanding-calls-credit.service";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RemandingCallsCreditComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Config,
    StatusBar,
    SplashScreen,
    UserService,
    CallsService,
    RemandingCallsCreditService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
