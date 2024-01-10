import Box2 from "@Src/Geometries/Box2";
import Object from "../Object";
import { canvas } from "@Src/index";
import Mage from "../Mage";
import directionTo from "@Src/Maths/directionTo";
import rotateToDirection from "@Src/Maths/rotateToDirection";

export default class Enemy extends Object {
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
    directionTo(this, this.getPosition(), this.currentTarget.getPosition(), 1);
    rotateToDirection(
      this,
      this.getPosition(),
      this.currentTarget.getPosition()
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
