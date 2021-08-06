import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';
import { ExibirFilmesComponent } from './exibir-filmes/exibir-filmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalExibicaoComponent } from './shared/modal/modal-exibicao/modal-exibicao.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalExibicaoService } from './shared/modal/modal-exibicao.service';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaFilmeComponent,
    ExibirFilmesComponent,
    ModalExibicaoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [ModalExibicaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
