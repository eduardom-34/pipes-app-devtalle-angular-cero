import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuracion del local de la app
import localEsSv from '@angular/common/locales/es-SV'
import localFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localEsSv );
registerLocaleData( localFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-SV'}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
