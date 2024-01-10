import Box2 from "@Src/Geometries/Box2";
import { canvas } from "@Src/index";

export default class Floor {
  readonly sprite: Box2;

  constructor(x: number, y: number, size: number) {
    this.sprite = new Box2(x, y, size, size);
    this.sprite.fillColor = "green";
  }

  update() {}

  render() {
    this.sprite.fill(canvas.context);
  }
}
