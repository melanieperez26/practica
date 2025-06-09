export class UpdateMovieDto {

  private constructor(
    public readonly id: string,
    public readonly title?: string,
    public readonly synopsis?: string,
    public readonly minAge?: number,
    public readonly image?: string,
    public readonly tags?: string[]
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.title) returnObj.title = this.title;
    if (this.synopsis) returnObj.synopsis = this.synopsis;
    if (this.minAge !== undefined) returnObj.minAge = this.minAge;
    if (this.image) returnObj.image = this.image;
    if (this.tags) returnObj.tags = this.tags;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateMovieDto?] {
    const { id, title, synopsis, minAge, image, tags } = props;

    if (!id || typeof id !== 'string') {
      return ['id must be a valid string'];
    }

    if (minAge !== undefined && (isNaN(Number(minAge)) || Number(minAge) < 0)) {
      return ['minAge must be a valid non-negative number'];
    }

    return [undefined, new UpdateMovieDto(id, title, synopsis, minAge, image, tags)];
  }
}