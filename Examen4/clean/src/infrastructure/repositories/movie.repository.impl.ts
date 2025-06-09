import { CreateMovieDto, MovieDatasource, Movie, MovieRepository, UpdateMovieDto } from '../../domain';

export class MovieRepositoryImpl implements MovieRepository {

  constructor(
    private readonly datasource: MovieDatasource,
  ) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.datasource.create(createMovieDto);
  }

  getAll(): Promise<Movie[]> {
    return this.datasource.getAll();
  }

  findById(id: string): Promise<Movie | null> {
    return this.datasource.findById(id);
  }

  updateById(updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.datasource.updateById(updateMovieDto);
  }

  deleteById(id: string): Promise<Movie> {
    return this.datasource.deleteById(id);
  }

}