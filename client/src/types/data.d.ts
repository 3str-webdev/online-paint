interface IClientLine {
  author: IAuthor;
  points: ICoords[];
}

interface IAuthor {
  name: string;
  color: number[];
  cursor: Cursor;
}

interface ICoords {
  x: number;
  y: number;
}

type Cursor = "default";
