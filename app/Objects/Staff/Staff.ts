import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas, mouse } from "@Src/index";
import relativeWith from "@Src/Maths/relativeWith";
import rotateToDirection from "@Src/Maths/rotateToDirection";
import Magic from "../Magic";
import getDirection from "@Src/Maths/getDirection";
import Object from "../Object";
import Timer from "@Src/Events/Timer";

export default class Staff extends Object {
  sprite = new Box2(0, 0, 70, 4);

  timerShoot: Timer = new Timer(1000);
  shoots: Magic[] = [];

  constructor(private readonly mage: Mage) {
    super();
    this.sprite.fillColor = "brown";
    this.setOriginX(20);
  }

  onRotate() {
    rotateToDirection(this, this.transladed(), mouse);
  }

  onFixInMage() {
    relativeWith(this, this.mage);
  }

  onShoot() {
    if (!mouse.isDown) return;

    if (!this.timerShoot.run().hasElapsed()) return;

    const magic = new Magic();

    relativeWith(magic, this, {
      x: 30,
    });

    magic.setDirection(getDirection(magic.transladed(), mouse));

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
