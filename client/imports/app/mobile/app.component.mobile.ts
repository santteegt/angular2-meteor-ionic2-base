import {Component, isDevMode} from "@angular/core";
import {MenuController, Platform, App} from "ionic-angular";
import {DashboardMobileComponent} from "./dashboard.component.mobile";

import template from "./app.component.mobile.html";

const isMobile = isDevMode() ? true:Meteor.isCordova;

if (isMobile) {
  require("ionic-angular/css/ionic.css");
}
 
@Component({
  selector: "app",
  template
})
export class AppMobileComponent {

	rootPage: any;
  constructor(app: App, platform: Platform, menu: MenuController) {
  	this.rootPage = DashboardMobileComponent;
  }
}