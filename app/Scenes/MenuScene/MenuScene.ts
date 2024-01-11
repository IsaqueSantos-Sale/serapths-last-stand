import Button from "@App/Objects/Button";
import GameScene from "../GameScene";

export default class MenuSecene extends GameScene {
  constructor() {
    super("menu");

    this.objects.add(new Button(this));
  }
}
