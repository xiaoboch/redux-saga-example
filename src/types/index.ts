export class FilmState {

    films: Film[];
    isFetching: boolean;
    error: string;

    constructor(films: Film[], isFetching: boolean, error: string) {
      this.films = films;
      this.isFetching = isFetching;
      this.error = error;
    }
}

export interface Film {
    title: string;
    writer: string;
    locations: string;
}
