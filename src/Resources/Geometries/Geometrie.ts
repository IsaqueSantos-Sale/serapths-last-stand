import Vector2 from "./Maths/Maths/Vector2";

export default abstract class Geometrie {
  readonly position: Vector2 = new Vector2(0, 0);
  readonly origin: Vector2 = new Vector2(0, 0);
  rotate: number = 0;
  fillColor: string = "black";

  abstract fill(ctx: CanvasRenderingContext2D): void;
}
