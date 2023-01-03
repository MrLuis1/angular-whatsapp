import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// !Components
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { ButtonComponent } from './components/button/button.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    ButtonComponent,
    HeaderComponent,
    PrincipalPageComponent,
    FooterComponent
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
    ButtonComponent,
    HeaderComponent,
    PrincipalPageComponent,
    FooterComponent
  ]
})
export class WhatsappModule { }
