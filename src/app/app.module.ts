import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { DatospersonalesComponent } from './portfolio/datospersonales/datospersonales.component';
import { EstudiosComponent } from './portfolio/estudios/estudios.component';
import { ExperienciaComponent } from './portfolio/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatospersonalesComponent,
    EstudiosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
