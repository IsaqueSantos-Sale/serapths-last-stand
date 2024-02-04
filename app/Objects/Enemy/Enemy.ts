import Box2 from "@Src/Resources/Geometries/Box2";
import GameObject from "../GameObject";
import { canvas, mouse, scenes } from "@Src/index";
import Mage from "../Mage";
import GameScene from "@App/Scenes/GameScene";

export default class Enemy extends GameObject {
  sprite: Box2 = new Box2(200, 100, 60, 20);
  targets: Mage[] = [];
  currentTarget: Mage | null = null;

  constructor(scene: GameScene) {
    super(scene);
    this.sprite.fillColor = "red";
  }

  findTarget() {
    if (!!this.currentTarget || this.targets.length <= 0) return;
    const targetsRandomIndex = Math.floor(Math.random() * this.targets.length);
    this.currentTarget = this.targets[targetsRandomIndex];
  }

  followCurrentTarget() {}

  onUpdate() {
    this.findTarget();
    this.followCurrentTarget();
  }

  onRender(): void {
    this.sprite.fill(canvas.context);
  }
}
