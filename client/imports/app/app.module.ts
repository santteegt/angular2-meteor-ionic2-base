import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { AppComponent } from "./app.component.web";
import { WEB_DECLARATIONS } from './web';

import { SHARED_DECLARATIONS } from './shared';
import { ROUTES_PROVIDERS } from './app.routes';

import { routes } from './app.routes';

// FOR MOBILE APP DEVELOPMENT
import { MOBILE_DECLARATIONS } from "./mobile/index";
import { AppMobileComponent } from "./mobile/app.component.mobile";
import { DashboardMobileComponent } from "./mobile/dashboard.component.mobile";
import { IonicModule, IonicApp } from "ionic-angular";

let moduleDefinition;

const isMobile = isDevMode() ? true:Meteor.isCordova;

if (isMobile) {
  moduleDefinition = {
    // Modules
    imports: [
      IonicModule.forRoot(AppMobileComponent)
    ],
    declarations: [
      ...MOBILE_DECLARATIONS,
      ...SHARED_DECLARATIONS
    ],
    providers: [
    ],
    // Main Component
    bootstrap: [
      IonicApp
    ],
    // Entry Components
    entryComponents: [
      DashboardMobileComponent
      // AppMobileComponent
      // PartiesListMobileComponent
    ]
  }
}
else {

  moduleDefinition = {
 
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
    ],
    // Components, Pipes, Directive
    declarations: [
      AppComponent,
      // DemoComponent,
      ...WEB_DECLARATIONS,
      ...SHARED_DECLARATIONS
    ],
    // Entry Components
    // entryComponents: [
    //   AppComponent
    // ],
    providers: [
      // DemoDataService,
      ...ROUTES_PROVIDERS
    ],
    bootstrap: [
      AppComponent
    ]
  }
}


@NgModule(moduleDefinition)
export class AppModule {
  constructor() {

  }
}
