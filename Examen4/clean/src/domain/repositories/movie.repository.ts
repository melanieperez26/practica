import { CreateMovieDto } from '../dtos/movies/create-movie.dto';
import { UpdateMovieDto } from '../dtos/movies/update-movie.dto';
import { Movie } from '../entities/movie.entity';



export abstract class MovieRepository {

  abstract create( createMovieDto: CreateMovieDto ): Promise<Movie>;

  //todo: paginación
  abstract getAll(): Promise<Movie[]>;

  abstract findById( id: string ): Promise<Movie | null>;
  abstract updateById( updateMovieDto: UpdateMovieDto ): Promise<Movie>;
  abstract deleteById( id: string ): Promise<Movie>;

}