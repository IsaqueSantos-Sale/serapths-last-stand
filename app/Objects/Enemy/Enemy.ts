import Box2 from "@Src/Geometries/Box2";
import GameObject from "../GameObject";
import { canvas } from "@Src/index";
import Mage from "../Mage";

export default class Enemy extends GameObject {
  sprite: Box2 = new Box2(200, 100, 60, 20);
  targets: Mage[] = [];
  currentTarget: Mage | null = null;

  constructor() {
    super();
    this.sprite.fillColor = "red";
  }

  findTarget() {
    if (!!this.currentTarget || this.targets.length <= 0) return;
    const targetsRandomIndex = Math.floor(Math.random() * this.targets.length);
    this.currentTarget = this.targets[targetsRandomIndex];
  }

  followCurrentTarget() {
    if (!this.currentTarget) return;
    this.sprite.directionTo(
      this.sprite.getPosition(),
      this.currentTarget.sprite.getPosition(),
      1
    );
    this.sprite.rotateToDirection(
      this.sprite.getPosition(),
      this.currentTarget.sprite.getPosition()
    );
  }

  update = () => {
    this.findTarget();
    this.followCurrentTarget();
  };

  render = () => {
    this.sprite.fill(canvas.context);
  };
}
