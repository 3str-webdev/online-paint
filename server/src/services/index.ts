import { isLineIntoView, convertLineToClientLine } from "./LineService";
import { supplementCurrentLine, isPictureIntoView } from "./PictureService";

const calculateObjRect = (obj: ILine | IPicture): IRect => {
  return {
    coords: { x: obj.min.x, y: obj.min.y },
    w: obj.max.x - obj.min.x,
    h: obj.max.y - obj.min.y,
  };
};

export {
  calculateObjRect,
  supplementCurrentLine,
  isPictureIntoView,
  isLineIntoView,
  convertLineToClientLine,
};
