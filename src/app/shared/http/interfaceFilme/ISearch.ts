export interface ISearch {
  Search: ITitle[];
  totalResults: number;
  Response: boolean;
}

export interface ITitle {
  imdbID: string;
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
}
