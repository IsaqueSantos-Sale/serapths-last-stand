import Box2 from "@Src/Draw/Box2";
import Mage from "../Mage";
import { canvas } from "@Src/index";

export default class Staff {
  sprite = new Box2(0, 0, 4, 70);

  constructor(private readonly mage: Mage) {
    this.sprite.fillColor = "brown";
  }

  update() {
    this.sprite.position.set(
      this.mage.sprite.position.x +
        this.mage.sprite.size.x / 2 -
        this.sprite.origin.x,
      this.mage.sprite.position.y +
        this.mage.sprite.size.y / 2 -
        this.sprite.origin.y
    );
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
