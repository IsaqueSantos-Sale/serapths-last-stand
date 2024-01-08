import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import Magic from "./Magic";
import Arc2 from "@Src/Draw/Arc2";
import relativeWith from "@Src/Maths/relativeWith";

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
    if (!mouse.isDown) return;

    relativeWith(this.magic.sprite, this.sprite, {
      x: this.sprite.size.x - 12,
      y: this.sprite.size.y / 2,
    });

    this.magic.directionX = this.directionX;
    this.magic.directionY = this.directionY;
  }

  onRotate() {
    const distanceX = mouse.x - this.sprite.centerX();
    const distanceY = mouse.y - this.sprite.centerY();
    const hypt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    this.directionX = distanceX / hypt;
    this.directionY = distanceY / hypt;
    this.sprite.rotate = Math.atan2(distanceY, distanceX);
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
    this.onRotate();
    this.onThrowMagic();
    this.magic.update();
  }

  render() {
    this.magic.render();
    this.sprite.fill(canvas.context);
  }
}
