import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalPageComponent } from './whatsapp/principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
