import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DrinksPage } from '../pages/drinks/drinks';
import {AddDrinkPage} from '../pages/add-drink/add-drink';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{AngularFireModule} from'angularfire2';

import { FIREBASE_CONFIG } from './firebase.credentials';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { DrinksListServices } from '../services/drinks-list/drinks-list.services';
import { RequestListServices } from '../services/request-drinks/request-list.services';

@NgModule({
  declarations: [
    MyApp,
    DrinksPage,
    AddDrinkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DrinksPage,
    AddDrinkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrinksListServices,
    RequestListServices
  ]
})
export class AppModule {}
