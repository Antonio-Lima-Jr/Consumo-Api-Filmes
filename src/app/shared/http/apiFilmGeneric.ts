import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class ApiFilmGeneric<TSearch, TGetById> {
  constructor(protected http: HttpClient, protected baseApi: string) { }

  list(pesquisa: string, page: number): Observable<TSearch> {
    return this.http.get<TSearch>(this.buildListUri(pesquisa, page));
    // .pipe(tap());
  }

  getById(plot: string, id: string): Observable<TGetById> {
    return this.http.get<TGetById>(this.buildIdUri(plot, id));
    // .pipe(take(1));
  }

  private buildListUri(pesquisa: string, page: number): string {
    return `${this.baseApi}&s=${pesquisa}&page=${page}`;
  }

  private buildIdUri(plot: string, id: string): string {
    return `${this.baseApi}&plot=${plot}&i=${id}`;
  }
}
