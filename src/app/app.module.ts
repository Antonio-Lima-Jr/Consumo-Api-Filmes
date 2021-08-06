import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';
import { SearchFilmService } from './shared/http/apiFilmeImpl/search-film.service';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaFilmeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SearchFilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
