import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
