import Axes from "./Modules/Axes";

export default class Arc2 {
  readonly position: Axes = new Axes();
  readonly origin: Axes = new Axes();
  radius: number = 1;
  fillColor = "black";
  rotate = 0;

  constructor(x: number, y: number, radius: number) {
    this.position.set(x, y);
    this.radius = radius;
  }

  fill(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(
      this.position.x + this.origin.x,
      this.position.y + this.origin.y
    );
    ctx.rotate(this.rotate);
    ctx.fillStyle = this.fillColor;
    ctx.arc(-this.origin.x, -this.origin.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
