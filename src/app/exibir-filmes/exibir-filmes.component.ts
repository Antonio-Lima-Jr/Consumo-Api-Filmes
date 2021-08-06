import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaginacao } from '../shared/http/interfaceFilme/IPaginacao';
import { ISearch, ITitle } from '../shared/http/interfaceFilme/ISearch';

@Component({
  selector: 'app-exibir-filmes',
  templateUrl: './exibir-filmes.component.html',
  styleUrls: ['./exibir-filmes.component.scss'],
})
export class ExibirFilmesComponent implements OnInit {
  @Input() resultadoPesquisa: ITitle[] | null = null;
  @Output('newPage') emiteNewPage = new EventEmitter<number>();
  @Input() pageAtual: IPaginacao | null = null;
  @Input() quantidadePaginas!: number;

  constructor() { }

  ngOnInit(): void { }

  emitNewPage(page: number): void {
    this.emiteNewPage.emit(page);
  }

  getQuantidadePages(): number[] {
    let arrayOfPages: number[] = [];
    for (let i = 0; i < Math.ceil(this.quantidadePaginas); i++) {
      arrayOfPages.push(i);
    }
    return arrayOfPages;
  }

  getArrayOfPages(): number[] {
    let arrayOfPages: number[] = [];
    if (this.pageAtual !== null) {
      for (let i = this.pageAtual.page - 3; i <= this.pageAtual.page + 3; i++) {
        arrayOfPages.push(i);
      }
    }
    return arrayOfPages;
  }
}
