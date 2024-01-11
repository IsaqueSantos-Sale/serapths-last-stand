import Box2 from "@Src/Geometries/Box2";
import { canvas, keyboard } from "@Src/index";
import Floor from "../Floor";
import Staff from "../Staff";
import GravityY from "@Src/Physical/GravityY";
import colliderBox2 from "@Src/colliders/colliderBox2";
import GameObject from "../GameObject";
import GameScene from "@App/Scenes/GameScene";

export default class Mage extends GameObject {
  sprite = new Box2(100, 100, 30, 60);
  gravity = new GravityY(1.3);
  staff: Staff;

  inFloor = false;

  jump = {
    totalHeight: 0,
    maxHeight: 30,
    actived: false,
  };

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
      this.jump.totalHeight += this.gravity.getVelocity();
    }

    if (this.jump.actived && this.jump.totalHeight >= this.jump.maxHeight) {
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

    if (isDown("KeyA")) {
      position.x -= 4;
    }

    if (isDown("KeyD")) {
      position.x += 4;
    }
  }

  onBordersCollider() {
    const { position, size } = this.sprite;
    const { resolution } = canvas;

    if (position.x <= 0) {
      position.x = 0;
    }

    if (position.x + size.x >= resolution.x) {
      position.x = resolution.x - size.x;
    }

    if (position.y <= 0) {
      position.y = 0;
    }

    if (position.y + size.y > resolution.y) {
      position.y = resolution.y - size.y;
    }
  }

  floorsCollider(floors: Floor[]) {
    for (const floor of floors) {
      colliderBox2(this.sprite, floor.sprite, {
        onTop: ({ overlapY }) => {
          this.gravity.reset();
          this.inFloor = true;
          this.sprite.position.y -= overlapY;
        },
        onLeft: ({ overlapX }) => {
          this.sprite.position.x -= overlapX;
        },
        onRight: ({ overlapX }) => {
          this.sprite.position.x += overlapX;
        },
      });
    }
  }

  onUpdate() {
    this.onJump();
    this.onFallingDown();
    this.onBordersCollider();
    this.onMovimentationX();
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
