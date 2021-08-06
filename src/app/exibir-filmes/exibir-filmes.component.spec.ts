import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirFilmesComponent } from './exibir-filmes.component';

describe('ExibirFilmesComponent', () => {
  let component: ExibirFilmesComponent;
  let fixture: ComponentFixture<ExibirFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibirFilmesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
