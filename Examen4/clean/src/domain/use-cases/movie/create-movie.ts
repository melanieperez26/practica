import { CreateMovieDto } from '../../dtos';
import { Movie } from '../../entities/movie.entity';
import { MovieRepository } from '../../repositories/movie.repository';


export interface CreateMovieUseCase {
  execute( dto: CreateMovieDto ): Promise<Movie>
}


export class CreateMovie implements CreateMovieUseCase {
  
  constructor(
    private readonly repository: MovieRepository,
  ) {}
  
  execute( dto: CreateMovieDto ): Promise<Movie> {
    return this.repository.create(dto);
  }

}

