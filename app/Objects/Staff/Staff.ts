import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import relativeWith from "@Src/Maths/relativeWith";
import rotateToDirection from "@Src/Maths/rotateToDirection";
import Magic from "../Magic";
import getDirection from "@Src/Maths/getDirection";

export default class Staff {
  sprite = new Box2(0, 0, 70, 4);
  shoots: Magic[] = [];

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

  onShoot() {
    if (!mouse.isDown) return;
    const magic = new Magic();
    const { x, y } = getDirection(this.sprite.position, mouse);
    relativeWith(magic.sprite, this.sprite, {
      x: this.sprite.size.x - magic.sprite.radius * 2,
    });
    magic.directionX = x;
    magic.directionY = y;

    this.shoots.push(magic);

    magic.destroy = () => {
      delete this.shoots[this.shoots.length];
    };

    mouse.isDown = false;
  }

  update() {
    this.onFixInMage();
    this.onRotate();
    this.onShoot();
    this.shoots.forEach((s) => s.update());
  }

  render() {
    this.sprite.fill(canvas.context);
    this.shoots.forEach((s) => s.render());
  }
}
