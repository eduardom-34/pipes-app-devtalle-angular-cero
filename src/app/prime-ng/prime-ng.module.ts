import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu';
// import { InputTextModule } from 'primeng/inputtext';
// import { RippleModule } from 'primeng/ripple';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports: [
    // MenuModule,
    // InputTextModule,
    // RippleModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule,

  ]
})
export class PrimeNgModule { }
