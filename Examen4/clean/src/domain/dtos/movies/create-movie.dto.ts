export class CreateMovieDto {

  private constructor(
    public readonly title: string,
    public readonly synopsis: string,
    public readonly minAge: number,
    public readonly image: string,
    public readonly tags: string[] = []
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateMovieDto?] {
    const { title, synopsis, minAge, image, tags } = props;

    if (!title) return ['Title property is required', undefined];
    if (!synopsis) return ['Synopsis property is required', undefined];
    if (minAge === undefined || minAge === null) return ['minAge property is required', undefined];
    if (!image) return ['Image property is required', undefined];

    return [undefined, new CreateMovieDto(title, synopsis, minAge, image, tags ?? [])];
  }
}