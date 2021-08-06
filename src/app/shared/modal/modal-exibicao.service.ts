import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IGetById } from '../http/interfaceFilme/IGetById';
import { ModalExibicaoComponent } from './modal-exibicao/modal-exibicao.component';

@Injectable({
  providedIn: 'root',
})
export class ModalExibicaoService {
  constructor(private modalService: BsModalService) { }

  public showModal(title: IGetById, dismissTimeout?: number) {
    const modalRef: BsModalRef = this.modalService.show(ModalExibicaoComponent);
    // console.log(modalRef);

    modalRef.content.titulo = title;
    modalRef.content.title = title.Title;
    modalRef.content.conteudo = title.Plot;
    modalRef.content.poster = title.Poster;
    modalRef.content.genero = title.Genre;
    modalRef.content.ano = title.Year;
    modalRef.content.diretor = title.Director;

    if (dismissTimeout) {
      setTimeout(() => {
        this.modalService.hide();
      }, dismissTimeout);
    }
  }
}
