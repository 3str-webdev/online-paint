import { FC, useEffect, useRef } from "react";
import styles from "./index.module.scss";

type ICanvasProps = {
  data: IClientLine[];
};

type IPointsObj = {
  x: number;
  y: number;
  w?: number;
  h?: number;
};

const Canvas: FC<ICanvasProps> = ({ data }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  const drawDots = (
    context: CanvasRenderingContext2D,
    points: IPointsObj[],
    color: number
  ) => {
    for (const { x, y, w, h } of points) {
      context.fillStyle = `${color}`;
      context.fillRect(x, y, w ?? 5, h ?? 5);
    }
  };

  useEffect(() => {
    if (!ref || !ref.current) return;
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    if (!context) throw new ReferenceError("Could not get context of canvas");
    for (const item of data) {
      drawDots(context, item.points, item.author.color[0]);
    }
  }, [data]);

  return <canvas className={styles.canvas} ref={ref} />;
};

export default Canvas;
