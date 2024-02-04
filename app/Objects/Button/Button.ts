import { canvas, mouse, scenes } from "@Src/index";
import GameObject from "../GameObject";
import Box2 from "@Src/Resources/Geometries/Box2";

export default class Button extends GameObject {
  sprite: Box2 = new Box2(200, 200, 80, 55);

  onInit(): void {
    this.sprite.fillColor = "white";
  }

  onUpdate(): void {}

  onRender(): void {
    this.sprite.fill(canvas.context);
  }
}
