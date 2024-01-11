import Arc2 from "@Src/Geometries/Arc2";
import { canvas } from "@Src/index";
import GameObject from "../GameObject";

export default class Magic extends GameObject {
  sprite = new Arc2(0, 0, 5);

  speed = 10;

  constructor() {
    super();
    this.sprite.fillColor = "blue";
  }

  destroy = () => {};

  destroyOn() {}

  onMoviment() {
    this.sprite.position.x += this.sprite.getDirectionX() * this.speed;
    this.sprite.position.y += this.sprite.getDirectionY() * this.speed;
  }

  update() {
    this.onMoviment();
    this.destroyOn();
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
