import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchFilmService } from './shared/http/apiFilmeImpl/search-film.service';
import { IGetById } from './shared/http/interfaceFilme/IGetById';
import { IPaginacao } from './shared/http/interfaceFilme/IPaginacao';
import { ITitle } from './shared/http/interfaceFilme/ISearch';
import { ModalExibicaoService } from './shared/modal/modal-exibicao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  pesquisa$!: Subscription;
  getId$!: Subscription;

  resultadoPesquisa!: ITitle[];
  qntDePaginas!: number;
  pesquisaAtual: IPaginacao | null = null;

  titleObservado!: IGetById;

  constructor(
    private searchFilm: SearchFilmService,
    private modalService: ModalExibicaoService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onPesquisa(event: IPaginacao) {
    this.pesquisa$ = this.searchFilm
      .list(event.pesquisa, event.page)
      .pipe(
        // Verifica se existe poster
        // se não insiro um not found image
        map((resultado) => {
          resultado.Search.forEach((value) => {
            if (value.Poster.match(/N\/A\b/)) {
              value.Poster = 'assets/images/not-found.jpg';
            }
          });
          return resultado;
        })
      )
      .subscribe(
        (resultado) => {
          this.pesquisaAtual = event;
          console.log(resultado);

          this.resultadoPesquisa = resultado.Search;
          this.qntDePaginas = resultado.totalResults / 10;
        },
        (error) => {
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
    this.searchFilm
      .getById('full', id)
      .pipe(
        map((resultado) => {
          if (resultado.Poster.match(/N\/A\b/)) {
            resultado.Poster = 'assets/images/not-found.jpg';
          }
          return resultado;
        })
      )
      .subscribe((resultado) => {
        this.titleObservado = resultado;
        this.modalService.showModal(resultado);
      });
  }

  ngOnDestroy(): void {
    this.getId$.unsubscribe();
    this.pesquisa$.unsubscribe();
  }
}
