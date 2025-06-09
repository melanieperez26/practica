import { UpdateMovieDto } from '../../dtos/movies/update-movie.dto';
import { Movie } from '../../entities/movie.entity';
import { MovieRepository } from '../../repositories/movie.repository';

export interface UpdateMovieUseCase {
  execute(dto: UpdateMovieDto): Promise<Movie>
}

export class UpdateMovie implements UpdateMovieUseCase {
  constructor(
    private readonly repository: MovieRepository,
  ) {}

  execute(dto: UpdateMovieDto): Promise<Movie> {
    return this.repository.updateById(dto);
  }
}