import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PesquisaFilmeComponent } from './pesquisa-filme.component';

describe('PesquisaFilmeComponent', () => {
  let component: PesquisaFilmeComponent;
  let fixture: ComponentFixture<PesquisaFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaFilmeComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Teste validação do input', () => {
    let errors: any = {};
    let pesquisarFilme = component.form.controls['pesquisarFilme'];
    errors = pesquisarFilme.errors || {};
    console.log(errors['required']);

    // Verifica se o input possui erros de validação
    expect(pesquisarFilme.valid).toBeFalsy();

    // Verifica se o input vazio cai na validação de required
    expect(errors['required']).toBeTruthy();

    // Seta o input com menos de 3 caracteres e verifica se cai na validação minLength.
    pesquisarFilme.setValue('te');
    errors = pesquisarFilme.errors || {};
    expect(errors['minlength']).toBeTruthy();

    // Adiciona um valor válido e verifica se a variável valid é verdadeira.
    pesquisarFilme.setValue('teste');
    expect(pesquisarFilme.valid).toBeTruthy();

    // Seta o input com mais de 3 caracteres e verifica se a variável de errors esta falsa
    errors = pesquisarFilme.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });
});
