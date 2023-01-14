import { isRectCollide } from "./../utils/rectCollide";

export const isLineIntoView = (line: ILine, viewport: IRect): boolean => {
  return isRectCollide(line.rect, viewport);
};

export const convertLineToClientLine = (
  picture: IPicture,
  line: ILine
): IClientLine => {
  return {
    author: picture.author,
    points: line.points,
  };
};
