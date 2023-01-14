interface ICoords {
  x: number;
  y: number;
}

interface IRect {
  coords: ICoords;
  w: number;
  h: number;
}

type Cursor = "default";
