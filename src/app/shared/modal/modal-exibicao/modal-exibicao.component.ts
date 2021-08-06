import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-exibicao',
  template: `
    <div class="card" style="width: 100%;">
      <img class="card-img-top" src="{{ poster }}" alt="{{ title }}" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ conteudo }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Genero: {{ genero }}</li>
        <li class="list-group-item">Ano Lançamento: {{ ano }}</li>
        <li class="list-group-item">Diretor: {{ diretor }}</li>
      </ul>
    </div>
  `,
  styles: ['.card-text{ with: 100% }', '.card{width: 90%}'],
})
export class ModalExibicaoComponent {
  @Input() title!: string;
  @Input() conteudo!: string;
  @Input() poster!: string;
  @Input() post!: string;
  @Input() genero!: string;
  @Input() ano!: string;
  @Input() diretor!: string;

  constructor(private modalService: BsModalService) { }

  onClose() {
    this.modalService.hide();
  }
}
