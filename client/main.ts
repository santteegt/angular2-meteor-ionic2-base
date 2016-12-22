import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode, isDevMode } from "@angular/core";
import { Meteor } from "meteor/meteor";

import ionicSelector from 'ionic-selector';

enableProdMode();

import { AppModule } from "./imports/app/app.module";

function setClass(css) {
  if (!document.body.className) {
    document.body.className = "";
  }
  document.body.className += " " + css;
}

const isMobile = isDevMode() ? true:Meteor.isCordova;

Meteor.startup(() => {
	if (isMobile) {
	    ionicSelector("app");
	    setClass('mobile');
	  } else {
	    setClass('web');
	  }
   platformBrowserDynamic().bootstrapModule(AppModule);
});
