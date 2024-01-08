import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import Magic from "../Magic";
import relativeWith from "@Src/Maths/relativeWith";
import rotateToDirection from "@Src/Maths/rotateToDirection";

export default class Staff {
  sprite = new Box2(0, 0, 70, 4);
  directionX: number = 0;
  directionY: number = 0;

  magic = new Magic();

  constructor(private readonly mage: Mage) {
    this.sprite.fillColor = "brown";
    this.sprite.origin.x -= 10;
  }

  onThrowMagic() {
    rotateToDirection(this.sprite, this.sprite.position, mouse);
    relativeWith(this.magic.sprite, this.sprite, {
      x: this.sprite.size.x - this.magic.sprite.radius * 2,
      y: this.sprite.size.halfY(),
    });
  }

  onFixInMage() {
    this.sprite.position.set(
      this.mage.sprite.position.x +
        this.mage.sprite.size.x / 2 -
        this.sprite.origin.x,
      this.mage.sprite.position.y +
        this.mage.sprite.size.y / 2 -
        this.sprite.origin.y
    );
  }

  update() {
    this.onFixInMage();
    this.onThrowMagic();
    this.magic.update();
  }

  render() {
    this.magic.render();
    this.sprite.fill(canvas.context);
  }
}
