import { Movie } from '../../entities/movie.entity';
import { MovieRepository } from '../../repositories/movie.repository';

export interface GetMovieUseCase {
  execute(id: string): Promise<Movie | null>
}

export class GetMovie implements GetMovieUseCase {
  constructor(
    private readonly repository: MovieRepository,
  ) {}

  execute(id: string): Promise<Movie | null> {
    return this.repository.findById(id);
  }
}