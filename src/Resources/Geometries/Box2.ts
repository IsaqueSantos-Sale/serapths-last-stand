import Vector2 from "./Maths/Maths/Vector2";
import Geometrie from "./Geometrie";

export default class Box2 extends Geometrie {
  readonly size: Vector2 = new Vector2();

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.position.def(x, y);
    this.size.def(width, height);
    this.origin.def(width / 2, height / 2); // defined with center rect
  }

  width(): number {
    return this.size.X();
  }

  height(): number {
    return this.size.Y();
  }

  fill(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(
      this.position.X() + this.origin.X(),
      this.position.Y() + this.origin.Y()
    );
    ctx.rotate(this.rotate);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(
      -this.origin.X(),
      -this.origin.Y(),
      this.width(),
      this.height()
    );
    ctx.restore();
  }
}
