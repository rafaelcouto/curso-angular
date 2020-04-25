import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';

import localePt from '@angular/common/locales/pt';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    deps: [SettingsService],
    useFactory: (settingsService: SettingsService) => settingsService.getLocale(),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
