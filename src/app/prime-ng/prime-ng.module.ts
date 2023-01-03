import { NgModule } from '@angular/core';

// !PrimeNG
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    CascadeSelectModule,
    InputTextModule,
  ]
})
export class PrimeNgModule { }
