import Arc2 from "@Src/Resources/Geometries/Arc2";
import { canvas } from "@Src/index";
import GameObject from "../GameObject";
import GameScene from "@App/Scenes/GameScene";

export default class Magic extends GameObject {
  sprite = new Arc2(0, 0, 5);

  speed = 10;

  constructor(scene: GameScene) {
    super(scene);
    this.sprite.fillColor = "blue";
  }

  onMoviment() {
    this.sprite.position.x += this.sprite.getDirectionX() * this.speed;
    this.sprite.position.y += this.sprite.getDirectionY() * this.speed;
  }

  onUpdate() {
    this.onMoviment();
  }

  onRender() {
    this.sprite.fill(canvas.context);
  }
}
