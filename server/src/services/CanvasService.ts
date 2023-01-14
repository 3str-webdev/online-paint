import { convertLineToClientLine, isLineIntoView } from "./LineService";
import { isPictureIntoView } from "./PictureService";

export const getLinesByClientViewport = (
  viewport: IRect,
  pictures: IPicture[]
): IClientLine[] => {
  const result = [] as IClientLine[];
  pictures.forEach((picture) => {
    if (isPictureIntoView(picture, viewport)) {
      picture.lines.forEach((line) => {
        if (isLineIntoView(line, viewport)) {
          result.push(convertLineToClientLine(picture, line));
        }
      });
    }
  });

  return result;
};
