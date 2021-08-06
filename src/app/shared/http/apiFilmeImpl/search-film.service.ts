import { IGetById } from './../interfaceFilme/ITitleFull';
import { Injectable } from '@angular/core';
import { ISearch } from '../interfaceFilme/ISearch';
import { ApiFilmGeneric } from '../apiFilmGeneric';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchFilmService extends ApiFilmGeneric<ISearch, IGetById> {
  constructor(protected http: HttpClient) {
    super(http, environment.API_FILMES);
  }
}
