import Box2 from "@Src/Resources/Geometries/Box2";
import { canvas } from "@Src/global";
import GameObject from "../GameObject";
import GameScene from "@App/Scenes/GameScene";

export default class Floor extends GameObject {
  readonly sprite: Box2;

  constructor(scene: GameScene, x: number, y: number, size: number) {
    super(scene, ["floor"]);
    this.sprite = new Box2(x, y, size, size);
    this.sprite.fillColor = "green";
  }

  onRender() {
    this.sprite.fill(canvas.context);
  }
}
