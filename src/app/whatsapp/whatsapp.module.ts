import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// !Components
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { ButtonComponent } from './components/button/button.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    ButtonComponent
  ]
})
export class WhatsappModule { }
