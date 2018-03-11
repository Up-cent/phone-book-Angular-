import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneBookComponent } from './PhoneBook/component';
import {AppEnterComponent} from './enter-page/component';

const routes: Routes = [
  { path: 'contacts', component: PhoneBookComponent },
  { path: 'enter', component: AppEnterComponent },
  { path: '',  redirectTo: '/enter', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
