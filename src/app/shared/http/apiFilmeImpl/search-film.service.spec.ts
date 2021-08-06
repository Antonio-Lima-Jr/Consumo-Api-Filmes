import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SearchFilmService } from './search-film.service';
import { HttpClient } from '@angular/common/http';
import { ISearch } from '../interfaceFilme/ISearch';
import { IGetById } from '../interfaceFilme/IGetById';

describe('Teste dos métodos de busca a API', () => {
  let service: SearchFilmService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchFilmService, HttpClient],
    });
    service = TestBed.inject(SearchFilmService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Teste do método getById
  it('Teste getById', () => {
    let plot = 'full';
    let idEsperado = 'tt0339291';

    let urlDestino = `http://www.omdbapi.com/?r=json&apikey=36452f9&plot=${plot}&i=${idEsperado}`;

    let subscribe = service.getById(plot, idEsperado).subscribe(
      (data) => {
        expect(data).toBeDefined();
        expect(data).toEqual(esperadoIGet);
      },
      (err) => {
        console.error(err);
      }
    );

    const config = {
      method: 'GET',
      url: urlDestino,
    };

    const req = httpMock.expectOne(config);

    req.flush(esperadoIGet);
    expect(service).toBeTruthy();
    httpMock.verify();

    subscribe.unsubscribe();
  });

  // Teste do método ListAll
  it('Teste List', () => {
    let pesquisa = 'teste';
    let page = 1;
    let urlDestino = `http://www.omdbapi.com/?r=json&apikey=36452f9&s=${pesquisa}&page=${page}`;

    let subscribe = service.list(pesquisa, page).subscribe(
      (data) => {
        expect(data).toBeDefined();
        expect(data).toEqual(esperadoISearch);
      },
      (err) => {
        console.error(err);
      }
    );

    const config = {
      method: 'GET',
      url: urlDestino,
    };

    const req = httpMock.expectOne(config);

    req.flush(esperadoISearch);
    expect(service).toBeTruthy();
    httpMock.verify();

    subscribe.unsubscribe();
  });

  let esperadoISearch: ISearch[] = [
    {
      imdbID: 'tt0056207',
      Title: 'Maciste contro i cacciatori di teste',
      Year: 1963,
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzNmNWFmNTMtODgwZi00OGRjLTg2ZmItOWU2OTRmZWFiYTAyXkEyXkFqcGdeQXVyMjA5NjIxNDU@._V1_SX300.jpg',
    },
    {
      Title: 'Maciste contro i cacciatori di teste',
      Year: 1963,
      imdbID: 'tt0056207',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzNmNWFmNTMtODgwZi00OGRjLTg2ZmItOWU2OTRmZWFiYTAyXkEyXkFqcGdeQXVyMjA5NjIxNDU@._V1_SX300.jpg',
    },
  ];

  let esperadoIGet: IGetById = {
    Title: 'A Series of Unfortunate Events',
    Year: 2004,
    Rated: 'PG',
    Released: '17 Dec 2004',
    Runtime: '108 min',
    Genre: 'Adventure, Comedy, Family',
    Director: 'Brad Silberling',
    Writer: 'Robert Gordon, Daniel Handler',
    Actors: 'Jim Carrey, Jude Law, Meryl Streep',
    Plot: "When a massive fire kills their parents, three children are delivered to the custody of cousin and stage actor Count Olaf, who is secretly plotting to steal their parents' vast fortune.",
    Language: 'English',
    Country: 'Germany, United States',
    Awards: 'Won 1 Oscar. 10 wins & 28 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '6.8/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '72%',
      },
      {
        Source: 'Metacritic',
        Value: '62/100',
      },
    ],
    Metascore: '62',
    imdbRating: '6.8',
    imdbVotes: '199,183',
    imdbID: 'tt0339291',
    Type: 'movie',
    DVD: '06 Jun 2014',
    BoxOffice: '$118,634,549',
    Production:
      'DreamWorks SKG, Paramount Pictures, Scott Rudin Productions, Nickelodeon Movies',
    Website: 'N/A',
    Response: true,
  };
});
