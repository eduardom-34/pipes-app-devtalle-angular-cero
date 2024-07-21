import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';




@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
