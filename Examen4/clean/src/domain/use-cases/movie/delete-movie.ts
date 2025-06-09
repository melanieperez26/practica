import { Movie } from '../../entities/movie.entity';
import { MovieRepository } from '../../repositories/movie.repository';

export interface DeleteMovieUseCase {
  execute(id: string): Promise<Movie>
}

export class DeleteMovie implements DeleteMovieUseCase {
  constructor(
    private readonly repository: MovieRepository,
  ) {}

  execute(id: string): Promise<Movie> {
    return this.repository.deleteById(id);
  }
}