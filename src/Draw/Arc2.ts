import Axes from "./Modules/Axes";

export default class Arc2 {
  readonly positino: Axes = new Axes();
  radius: number = 1;
  fillColor = "black";

  constructor(x: number, y: number, radius: number) {
    this.positino.set(x, y);
    this.radius = radius;
  }

  fill(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.arc(this.positino.x, this.positino.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
