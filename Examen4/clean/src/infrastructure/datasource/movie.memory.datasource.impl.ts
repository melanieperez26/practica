import { CreateMovieDto } from '../../domain/dtos/movies/create-movie.dto';
import { UpdateMovieDto } from '../../domain/dtos/movies/update-movie.dto';
import { MovieDatasource } from '../../domain/datasources/movie.datasource';
import { Movie } from '../../domain/entities/movie.entity';

interface MovieMemoryModel {
  id: string;
  title: string;
  synopsis: string;
  minAge: number;
  image: string;
  tags: string[];
}

export class MovieMemoryDatasourceImpl implements MovieDatasource {
  private movies: MovieMemoryModel[] = [];
  private nextId: number = 1;

  constructor(initialMovies: MovieMemoryModel[] = []) {
    this.movies = [...initialMovies];
    if (this.movies.length > 0) {
      this.nextId = Math.max(...this.movies.map(m => Number(m.id))) + 1;
    }
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie: MovieMemoryModel = {
      id: String(this.nextId++),
      title: createMovieDto.title,
      synopsis: createMovieDto.synopsis,
      minAge: createMovieDto.minAge,
      image: createMovieDto.image,
      tags: createMovieDto.tags ?? []
    };
    this.movies.push(newMovie);
    return Movie.fromObject(newMovie);
  }

  async getAll(): Promise<Movie[]> {
    return this.movies.map(movie => Movie.fromObject(movie));
  }

  async findById(id: string): Promise<Movie | null> {
    const movie = this.movies.find(m => m.id === id);
    return movie ? Movie.fromObject(movie) : null;
  }

  async updateById(updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movieIndex = this.movies.findIndex(m => m.id === updateMovieDto.id);
    if (movieIndex === -1) throw `Movie with id ${updateMovieDto.id} not found`;

    const currentMovie = this.movies[movieIndex];
    const updatedMovie = {
      ...currentMovie,
      ...updateMovieDto.values
    };
    this.movies[movieIndex] = updatedMovie;
    return Movie.fromObject(updatedMovie);
  }

  async deleteById(id: string): Promise<Movie> {
    const movieIndex = this.movies.findIndex(m => m.id === id);
    if (movieIndex === -1) throw `Movie with id ${id} not found`;

    const deletedMovie = this.movies[movieIndex];
    this.movies.splice(movieIndex, 1);
    return Movie.fromObject(deletedMovie);
  }

  // Métodos adicionales para gestión de datos en memoria

  public getRawData(): MovieMemoryModel[] {
    return [...this.movies];
  }

  public clear(): void {
    this.movies = [];
    this.nextId = 1;
  }

  public importData(data: MovieMemoryModel[]): void {
    this.movies = [...data];
    if (this.movies.length > 0) {
      this.nextId = Math.max(...this.movies.map(m => Number(m.id))) + 1;
    } else {
      this.nextId = 1;
    }
  }

  public exportToJSON(): string {
    return JSON.stringify(this.movies, null, 2);
  }

  public importFromJSON(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData);
      if (Array.isArray(data)) {
        this.importData(data);
      } else {
        throw new Error('JSON data must be an array of movies');
      }
    } catch (error) {
      throw new Error(`Invalid JSON format: ${error}`);
    }
  }
}