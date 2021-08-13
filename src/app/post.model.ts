export class Post {
  constructor(
    public title: string,
    public paragraph: string,
    public imgPath: string,
    public details: string,
    public datetime: Date,
    public numberOfLikes: number
  ) {}
}
