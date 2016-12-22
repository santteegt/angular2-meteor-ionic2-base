import { Component } from '@angular/core';
import { Dashboard } from "../shared-components/dashboard.class";
 
import template from './dashboard.component.mobile.html';
 
@Component({
  selector: 'dashboard',
  template
})
export class DashboardMobileComponent extends Dashboard {
  constructor() {
    super("Hello mobile World!");
  }
}