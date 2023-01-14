import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import CanvasController from "../../controllers/CanvasController";

export const updateHandler = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
  viewport: IRect
) => {
  socket.emit("update", CanvasController.getLines(viewport));
};
