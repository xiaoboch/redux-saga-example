

export default class FilmState {

    public films: Film[] = [];
    public isFetching: boolean = false;
    public error: string;

    constructor(films: Film[], isFetching: boolean, error: string){
        this.films = films;
        this.isFetching = isFetching;
        this.error= error;
    }

}

export class Film {
    public location: string;
    public writer: string;
    public title: string;
}