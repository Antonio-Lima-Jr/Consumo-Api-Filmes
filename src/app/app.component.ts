import { Component, OnDestroy } from '@angular/core';

import { SearchFilmService } from './shared/http/apiFilmeImpl/search-film.service';
import { IPaginacao } from './shared/http/interfaceFilme/IPaginacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(private searchFilm: SearchFilmService,) { }

  onPesquisa(event: IPaginacao) {
    console.log(event);
    this.searchFilm.list(event.pesquisa, event.page).subscribe(
      resultado => {
        console.log(resultado)
      },
      error => {
        console.log(error);
      }
    );
    this.onTitle();
  }

  onTitle() {
    console.log("_____________________________");

    this.searchFilm.getById("full", "tt0056207").subscribe(
      resultado => {
        console.log(resultado)
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    // TODO: unsubscribe e retirar o take da generics
  }
}
