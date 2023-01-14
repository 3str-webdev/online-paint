export const isRectCollide = (r1: IRect, r2: IRect) => {
    return !(
      r1.coords.y + r1.h < r2.coords.y ||
      r1.coords.y > r2.coords.y + r2.h ||
      r1.coords.x + r1.w < r2.coords.x ||
      r1.coords.x > r2.coords.x + r2.w
    );
}