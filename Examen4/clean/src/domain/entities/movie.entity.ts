export class Movie {
  constructor(
    public id: string,
    public title: string,
    public synopsis: string,
    public minAge: number,
    public image: string,
    public tags: string[] = []
  ) {
    if (!id) throw new Error('id is required');
    if (!title) throw new Error('title is required');
    if (!synopsis) throw new Error('synopsis is required');
    if (minAge === undefined || minAge === null) throw new Error('minAge is required');
    if (!image) throw new Error('image is required');
  }

  static fromObject(obj: { [key: string]: any }): Movie {
    return new Movie(
      obj.id,
      obj.title,
      obj.synopsis,
      obj.minAge,
      obj.image,
      obj.tags ?? []
    );
  }
}