import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchFilmService } from './shared/http/apiFilmeImpl/search-film.service';
import { IGetById } from './shared/http/interfaceFilme/IGetById';
import { IPaginacao } from './shared/http/interfaceFilme/IPaginacao';
import { ITitle } from './shared/http/interfaceFilme/ISearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  pesquisa$!: Subscription;
  getId$!: Subscription;

  resultadoPesquisa!: ITitle[];
  qntDePaginas!: number;
  pesquisaAtual: IPaginacao | null = null;

  titleObservado!: IGetById;

  constructor(private searchFilm: SearchFilmService) { }


  onPesquisa(event: IPaginacao) {

    this.pesquisa$ = this.searchFilm.list(event.pesquisa, event.page).pipe(
      // Verifica se existe poster
      // se não insiro um not found image
      map(resultado => {
        resultado.Search.forEach(value => {
          if (value.Poster.match(/N\/A\b/)) {
            value.Poster = 'assets/images/not-found.jpg';
          }
        });
        return resultado;
      }
      )).subscribe(
        resultado => {
          this.pesquisaAtual = event;
          console.log(resultado);

          this.resultadoPesquisa = resultado.Search;
          this.qntDePaginas = resultado.totalResults / 10;
        },
        error => {
          console.log(error);
        }
      );
  }

  getNewPage(num: number) {
    if (this.pesquisaAtual !== null) {
      this.pesquisaAtual.page = num;
      this.onPesquisa(this.pesquisaAtual);
    }
  }

  getTitle(id: string) {
    this.searchFilm.getById('full', id).subscribe(
      resultado => {
        this.titleObservado = resultado;
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );

  }

  ngOnDestroy(): void {
    this.getId$.unsubscribe();
    this.pesquisa$.unsubscribe();
  }
}
