import { RouterConfig } from '@angular/router';
import { Home } from './home';
import  { Opportunity } from './opportunities';


export const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'opportunity', component: Opportunity },
  { path: '**', redirectTo: 'home' }
];
