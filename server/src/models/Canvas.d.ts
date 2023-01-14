interface ILine {
  points: ICoords[];
  max: ICoords;
  min: ICoords;
  rect: IRect;
}

interface IPicture {
  author: IAuthor;
  lines: ILine[];
  max: ICoords;
  min: ICoords;
  rect: IRect;
}
