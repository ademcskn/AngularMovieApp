import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies', //<movies></movies>  .movies => <div class=".movies"></div> #movies => <div id="movies"></div>
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    //this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  add(name: string, imageUrl: string, description: string) {
    this.movieService
      .add({
        name,
        imageUrl,
        description,
      } as Movie)
      .subscribe((movie) => this.movies.push(movie));
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter((m) => m !== movie);
    this.movieService.delete(movie).subscribe();
  }
}
