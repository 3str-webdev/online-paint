import { isRectCollide } from "./../utils/rectCollide";

export const supplementCurrentLine = (
  picture: IPicture,
  point: ICoords
): void => {
  picture.lines[picture.lines.length - 1].points.push(point);
};

export const isPictureIntoView = (
  picture: IPicture,
  viewport: IRect
): boolean => {
  return isRectCollide(picture.rect, viewport);
};
