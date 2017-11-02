import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InfoPage } from '../pages/info/info';
import { PonudaPage } from '../pages/ponuda/ponuda';
import { PocetnaPage } from '../pages/pocetna/pocetna';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { DetailsModalPage } from '../pages/details-modal/details-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    PonudaPage,
    PocetnaPage,
    TabsControllerPage,
    DetailsModalPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    PonudaPage,
    PocetnaPage,
    TabsControllerPage,
    DetailsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}