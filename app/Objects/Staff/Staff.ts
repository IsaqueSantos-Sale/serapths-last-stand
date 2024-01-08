import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import relativeWith from "@Src/Maths/relativeWith";
import rotateToDirection from "@Src/Maths/rotateToDirection";

export default class Staff {
  sprite = new Box2(0, 0, 70, 4);

  constructor(private readonly mage: Mage) {
    this.sprite.fillColor = "brown";
  }

  onRotate() {
    rotateToDirection(this.sprite, this.sprite.position, mouse);
  }

  onFixInMage() {
    relativeWith(this.sprite, this.mage.sprite, {
      x: this.mage.sprite.size.halfX() - this.sprite.size.halfX() + 10,
      y: this.mage.sprite.size.halfY(),
    });
  }

  update() {
    this.onFixInMage();
    this.onRotate();
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
