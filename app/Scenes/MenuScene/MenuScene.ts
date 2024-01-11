import Button from "@App/Objects/Button";
import GameScene from "../GameScene";

export default class MenuScene extends GameScene {
  constructor() {
    super();
    const button = new Button(this).name("button");
    this.objects.add(button);
  }
}
