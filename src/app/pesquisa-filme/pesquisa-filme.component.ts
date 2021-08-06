import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IPaginacao } from '../shared/http/interfaceFilme/IPaginacao';

@Component({
  selector: 'app-pesquisa-filme',
  templateUrl: './pesquisa-filme.component.html',
  styleUrls: ['../../styles-theme.scss', './pesquisa-filme.component.scss'],
})
export class PesquisaFilmeComponent implements OnInit {
  form!: FormGroup;
  @Output("pesquisa") pesquisaEmissor = new EventEmitter<IPaginacao>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pesquisarFilme: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.pesquisaEmissor.emit({ pesquisa: this.form.controls.pesquisarFilme.value, page: 1 })
      this.form.reset();

    }
  }

  verificaValidInput(input: string): string | string[] {
    if (this.verificaValidTouch(input)) {
      return ['is-invalid'];
    } else if (this.verificaTouchAndPristine(input)) {
      return '';
    } else {
      return 'is-valid';
    }
  }

  verificaValidLabel(label: string): string | string[] {
    if (this.verificaValidTouch(label)) {
      return ['text-danger', 'text-ajuste'];
    } else if (this.verificaTouchAndPristine(label)) {
      return '';
    } else {
      return 'text-success';
    }
  }

  verificaTouchAndPristine(value: string) {
    return (
      !this.verificaValidTouch(value) && this.form.controls[value].pristine
    );
  }

  verificaValidTouch(value: string) {
    return (
      this.form.controls[value].invalid && this.form.controls[value].touched
    );
  }
}
