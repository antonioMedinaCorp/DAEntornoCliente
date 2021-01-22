import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    TercerComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
