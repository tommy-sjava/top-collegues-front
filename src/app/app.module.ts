import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { AvisComponent } from './avis/avis.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    AvisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
