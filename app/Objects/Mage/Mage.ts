import Box2 from "@Src/Resources/Geometries/Box2";
import { canvas, keyboard } from "@Src/index";
import Floor from "../Floor";
import Staff from "../Staff";
import GravityY from "@Src/Physical/GravityY";
import GameObject from "../GameObject";
import GameScene from "@App/Scenes/GameScene";
import MageAttributes from "./MageAttributes";
import Vector2 from "@Src/Resources/Geometries/Maths/Maths/Vector2";
import { _DEFAULT_ } from "@Src/global";

export default class Mage extends GameObject {
  sprite = new Box2(100, 100, 30, 60);
  speed = new Vector2(3);
  gravity = new GravityY();
  staff: Staff;

  inFloor = false;

  jump = {
    totalHeight: 0,
    maxHeight: 30,
    actived: false,
  };

  readonly attributes: MageAttributes = new MageAttributes();

  constructor(scene: GameScene) {
    super(scene);
    this.staff = new Staff(scene, this);
    this.sprite.fillColor = "white";
  }

  onJump() {
    if (!this.jump.actived && this.inFloor && keyboard.isDown("Space")) {
      this.jump.actived = true;
      this.inFloor = false;
      this.gravity.resetAndInvert();
      keyboard.reset("Space");
    }

    if (this.jump.actived) {
      this.jump.totalHeight += this.gravity.speed();
    }

    if (
      this.jump.actived &&
      this.jump.totalHeight >= this.attributes.jumpHeight
    ) {
      this.jump.actived = false;
      this.jump.totalHeight = 0;
      this.gravity.resetAndInvert();
    }
  }

  onFallingDown() {
    this.gravity.apply(this.sprite.position);
  }

  onMovimentationX() {
    const { position } = this.sprite;
    const { isDown } = keyboard;

    let moviment = 0;

    if (isDown("KeyA")) moviment = -1;
    if (isDown("KeyD")) moviment = 1;

    const newPos = this.speed.mult(moviment);

    position.sum(newPos);
  }

  onBordersCollider() {
    const { position } = this.sprite;
    const { resolution } = canvas;
    const newPos = new Vector2();

    if (position.X() <= 0) {
      newPos.def(0);
    }

    if (position.X() + this.sprite.width() >= resolution.x) {
      newPos.def(resolution.x - this.sprite.width());
    }

    if (position.Y() <= 0) {
      newPos.def(_DEFAULT_, 0);
    }

    if (position.Y() + this.sprite.height() > resolution.y) {
      newPos.def(_DEFAULT_, resolution.y - this.sprite.height());
    }
  }

  floorsCollider(floors: Floor[]) {}

  onUpdate() {
    this.onMovimentationX();
    this.onBordersCollider();
  }

  onCollider() {
    const floors = this.scene.objects.findByTags<Floor>(["floor"]);
    this.floorsCollider(floors);
  }

  onUpdateChild(): void {
    this.staff.callUpdate();
  }

  onRender() {
    this.sprite.fill(canvas.context);
    this.staff.callRender();
  }
}
