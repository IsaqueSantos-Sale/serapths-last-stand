import Arc2 from "@Src/Draw/Arc2";
import Box2 from "@Src/Draw/Box2";
import { Axles } from "@Src/Types";

export default abstract class Object {
  abstract sprite: Box2 | Arc2;

  x() {
    return this.sprite.position.x;
  }

  y() {
    return this.sprite.position.y;
  }

  transladedX() {
    return this.sprite.position.x + this.sprite.origin.x;
  }

  transladedY() {
    return this.sprite.position.y + this.sprite.origin.y;
  }

  transladed(): Axles {
    return {
      x: this.transladedX(),
      y: this.transladedY(),
    };
  }

  getPosition(): Axles {
    return { x: this.x(), y: this.y() };
  }

  getOriginX(): number {
    return this.sprite.origin.x;
  }

  getOriginY(): number {
    return this.sprite.origin.y;
  }

  getOrigin(): Axles {
    return {
      x: this.getOriginX(),
      y: this.getOriginY(),
    };
  }

  getRotate(): number {
    return this.sprite.rotate;
  }

  getDirectionX(): number {
    return this.sprite.direction.x;
  }

  getDirectionY(): number {
    return this.sprite.direction.y;
  }

  getDirection(): Axles {
    return {
      x: this.getDirectionX(),
      y: this.getDirectionY(),
    };
  }

  setDirectionX(x: number) {
    this.sprite.direction.x = x;
  }

  setDirectionY(y: number) {
    this.sprite.direction.y = y;
  }

  setDirection(direction: Axles) {
    this.setDirectionX(direction.x);
    this.setDirectionY(direction.y);
  }

  setX(x: number) {
    this.sprite.position.x = x;
  }

  setY(y: number) {
    this.sprite.position.y = y;
  }

  incrementX(x: number) {
    this.sprite.position.x += x;
  }

  incrementY(y: number) {
    this.sprite.position.y += y;
  }

  setRotate(rad: number) {
    this.sprite.rotate = rad;
  }

  setOriginX(x: number) {
    this.sprite.origin.x = x;
  }

  setOriginY(y: number) {
    this.sprite.origin.y = y;
  }

  setOrigin(origin: Axles) {
    this.setOriginX(origin.x);
    this.setOriginY(origin.y);
  }
}
