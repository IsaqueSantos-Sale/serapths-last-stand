import Geometrie from "./Geometrie";

export default class Arc2 extends Geometrie {
  radius: number = 1;

  constructor(x: number, y: number, radius: number) {
    super();
    this.position.def(x, y);
    this.radius = radius;
  }

  fill(ctx: CanvasRenderingContext2D) {
    this.origin.sum(this.position);
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.origin.X(), this.origin.Y());
    ctx.rotate(this.rotate);
    ctx.fillStyle = this.fillColor;
    ctx.arc(-this.origin.Y(), -this.origin.Y(), this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
