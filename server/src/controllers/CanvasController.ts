import { supplementCurrentLine } from "./../services/PictureService";
import { getLinesByClientViewport } from "./../services/CanvasService";

class CanvasController {
  viewport: ICoords;
  pictures: IPicture[];

  constructor() {
    this.viewport = { x: 0, y: 0 };
    this.pictures = [
      {
        author: {
          name: "Bob",
          color: [0, 0, 0],
          cursor: "default",
        },
        lines: [
          {
            points: [
              { x: 0, y: 5 },
              { x: 10, y: 2 },
            ],
            max: { x: 10, y: 5 },
            min: { x: 0, y: 2 },
            rect: { coords: { x: 0, y: 2 }, w: 5, h: 2 },
          },
        ],
        max: { x: 10, y: 5 },
        min: { x: 0, y: 2 },
        rect: { coords: { x: 0, y: 2 }, w: 5, h: 2 },
      },
    ];
  }

  getLines(viewport: IRect): IClientLine[] {
    return getLinesByClientViewport(viewport, this.pictures);
  }

  addPoint(point: ICoords, authorName: string): void {
    const myPicture = this.pictures.filter(
      (picture) => picture.author.name === authorName
    )[0];
    supplementCurrentLine(myPicture, point);
  }
}

export default new CanvasController();
