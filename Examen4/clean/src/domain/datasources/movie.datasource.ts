import { CreateMovieDto } from '../dtos/movies/create-movie.dto';
import { UpdateMovieDto } from '../dtos/movies/update-movie.dto';
import { Movie } from '../entities/movie.entity';

export abstract class MovieDatasource {

  abstract create(createMovieDto: CreateMovieDto): Promise<Movie>;

  
  abstract getAll(): Promise<Movie[]>;

  abstract findById(id: string): Promise<Movie | null>;
  abstract updateById(updateMovieDto: UpdateMovieDto): Promise<Movie>;
  abstract deleteById(id: string): Promise<Movie>;

}