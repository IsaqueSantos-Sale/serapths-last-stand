import Box2 from "@Src/Resources/Geometries/Box2";
import Magic from "../Magic";
import getDirection from "@Src/Resources/Geometries/Maths/getDirection";
import GameObject from "../GameObject";
import Timer from "@Src/Events/Timer";
import { canvas, mouse } from "@Src/global";
import GameScene from "@App/Scenes/GameScene";
import Mage from "../Mage";

export default class Staff extends GameObject {
  sprite = new Box2(0, 0, 70, 4);

  timerShoot: Timer = new Timer(500);
  shoots: Magic[] = [];

  constructor(scene: GameScene, private readonly mage: Mage) {
    super(scene);
    this.sprite.fillColor = "brown";
  }

  onRotate() {}

  onFixInMage() {}

  onShoot() {
    if (!this.timerShoot.run().hasElapsed()) return;
    if (!mouse.isDown) return;

    const magic = new Magic(this.scene);

    magic.destroy = () => {
      delete this.shoots[this.shoots.length];
    };

    this.shoots.push(magic);

    this.timerShoot.reset();
  }

  onUpdate() {
    this.onFixInMage();
    this.onRotate();
    this.onShoot();
  }

  onUpdateChild(): void {
    this.shoots.forEach((s) => s.callUpdate());
  }

  onRender() {
    this.sprite.fill(canvas.context);
    this.shoots.forEach((s) => s.callRender());
  }
}
