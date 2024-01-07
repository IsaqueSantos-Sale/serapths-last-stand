import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";

export default class Staff {
  sprite = new Box2(0, 0, 70, 4);
  directionX: number = 0;
  directionY: number = 0;

  constructor(private readonly mage: Mage) {
    this.sprite.fillColor = "brown";
    this.sprite.origin.x -= 10;
  }

  onRotate() {
    const distanceX = mouse.x - this.sprite.centerX();
    const distanceY = mouse.y - this.sprite.centerY();
    this.directionX = distanceX;
    this.directionY = distanceY;

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
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
