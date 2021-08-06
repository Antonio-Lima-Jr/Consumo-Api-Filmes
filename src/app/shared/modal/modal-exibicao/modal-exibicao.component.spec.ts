import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ModalExibicaoComponent } from './modal-exibicao.component';

describe('ModalExibicaoComponent', () => {
  let component: ModalExibicaoComponent;
  let fixture: ComponentFixture<ModalExibicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalExibicaoComponent],
      providers: [BsModalService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
