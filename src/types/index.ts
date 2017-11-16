export class FilmState {

    films?: Film[];
    isFetching: boolean;
    error?: string;

    constructor(films: Film[], isFetching: boolean, error: string) {
      this.films = films;
      this.isFetching = isFetching;
      this.error = error;
    }
}

export class AppState {
    public filmState: FilmState;

    constructor(filmState: FilmState){
        this.filmState = filmState;
    }
}

export interface Film {
    title: string;
    writer: string;
    locations: string;
}
