import Box2 from "@Src/Draw/Box2";
import { canvas, keyboard } from "@Src/index";
import Floor from "../Floor";
import solidColliderBox2 from "@Src/Physical/solidColliderBox2";

export default class Mage {
  sprite = new Box2(100, 100, 30, 60);
  inFloor = false;
  falling = {
    acceleration: 1,
    velocity: 0,
  };
  jump = {
    heigth: 0,
    maxHeigth: 50,
    acceleration: 1,
    velocity: 0,
    maxJumps: 2,
    totalJumps: 0,
    actived: false,
    inAir: false,
  };

  constructor() {
    this.sprite.fillColor = "white";
  }

  onJump() {
    const { isDown, reset } = keyboard;

    if (this.inFloor && isDown("Space")) {
      this.inFloor = false;
      this.jump.actived = true;
      reset("Space");
    }

    if (this.jump.actived && this.jump.heigth <= this.jump.maxHeigth) {
      this.jump.velocity += this.jump.acceleration;
      this.jump.heigth += this.jump.velocity;
      this.sprite.position.y -= this.jump.velocity;
      return;
    }

    this.jump.actived = false;
    this.jump.velocity = 0;
    this.jump.heigth = 0;
  }

  onFallingDown() {
    if (this.jump.actived) return;

    this.falling.velocity += this.falling.acceleration;
    this.sprite.position.y += this.falling.velocity;
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
      solidColliderBox2(this.sprite, floor.sprite, {
        onTop: ({ overlapY }) => {
          this.inFloor = true;
          this.falling.velocity = 0;
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

  update() {
    this.onJump();
    this.onFallingDown();
    this.onBordersCollider();
    this.onMovimentationX();
  }

  collider(floors: Floor[]) {
    this.floorsCollider(floors);
  }

  render() {
    this.sprite.fill(canvas.context);
  }
}
