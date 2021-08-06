import { TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ModalExibicaoService } from './modal-exibicao.service';

describe('ModalExibicaoService', () => {
  let service: ModalExibicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BsModalService],
    });
    service = TestBed.inject(ModalExibicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
