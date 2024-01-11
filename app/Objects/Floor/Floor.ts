import Box2 from "@Src/Geometries/Box2";
import { canvas } from "@Src/index";
import GameObject from "../GameObject";

export default class Floor extends GameObject {
  readonly sprite: Box2;

  constructor(x: number, y: number, size: number) {
    super();
    this.sprite = new Box2(x, y, size, size);
    this.sprite.fillColor = "green";
  }

  update() {}

  render() {
    this.sprite.fill(canvas.context);
  }
}
