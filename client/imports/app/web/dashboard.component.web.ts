import { Component } from '@angular/core';
import { Dashboard } from "../shared-components/dashboard.class";
 
import template from './dashboard.component.web.html';
 
@Component({
  selector: 'dashboard',
  template
})
export class DashboardComponent extends Dashboard {
  constructor() {
    super("Hello World!");
  }
}