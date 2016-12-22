import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { DashboardComponent } from './web/dashboard.component.web';
  
export const routes: Route[] = [
  { path: '', component: DashboardComponent},
  // { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];