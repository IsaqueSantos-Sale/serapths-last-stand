import Arc2 from "@Src/Draw/Arc2";
import { canvas } from "@Src/index";

export default class Magic {
  sprite = new Arc2(0, 0, 2);

  speed = 10;

  directionX: number = 0;
  directionY: number = 0;

  constructor() {
    this.sprite.fillColor = "blue";
  }

  destroy = () => {};

  destroyOn() {}

  onMoviment() {
    this.sprite.position.x += this.directionX * this.speed;
    this.sprite.position.y += this.directionY * this.speed;
  }

  update() {
    this.onMoviment();
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
