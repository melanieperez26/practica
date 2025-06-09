import { Movie } from '../../entities/movie.entity';
import { MovieRepository } from '../../repositories/movie.repository';

export interface GetMoviesUseCase {
  execute(): Promise<Movie[]>
}

export class GetMovies implements GetMoviesUseCase {
  constructor(
    private readonly repository: MovieRepository,
  ) {}

  execute(): Promise<Movie[]> {
    return this.repository.getAll();
  }
}