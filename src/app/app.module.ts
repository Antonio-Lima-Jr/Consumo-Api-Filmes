import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';
import { ExibirFilmesComponent } from './exibir-filmes/exibir-filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaFilmeComponent,
    ExibirFilmesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
