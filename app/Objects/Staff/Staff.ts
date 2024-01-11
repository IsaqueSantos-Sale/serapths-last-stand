import Box2 from "@Src/Geometries/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import Magic from "../Magic";
import getDirection from "@Src/Geometries/Maths/getDirection";
import Object from "../Object";
import Timer from "@Src/Events/Timer";

export default class Staff extends Object {
  sprite = new Box2(0, 0, 70, 4);

  timerShoot: Timer = new Timer(500);
  shoots: Magic[] = [];

  constructor(private readonly mage: Mage) {
    super();
    this.sprite.fillColor = "brown";
    this.sprite.setOriginX(20);
  }

  onRotate() {
    this.sprite.rotateToDirection(this.sprite.transladed(), mouse);
  }

  onFixInMage() {
    this.sprite.relativeWith(this.mage.sprite);
  }

  onShoot() {
    if (!this.timerShoot.run().hasElapsed()) return;
    if (!mouse.isDown) return;

    const magic = new Magic();

    magic.sprite.relativeWith(this.sprite, {
      x: 30,
    });

    const magicDirection = getDirection(magic.sprite.transladed(), mouse);

    magic.sprite.setDirection(magicDirection);

    magic.destroy = () => {
      delete this.shoots[this.shoots.length];
    };

    this.shoots.push(magic);

    this.timerShoot.reset();
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
