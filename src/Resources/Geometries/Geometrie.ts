import { Axles } from "@Src/Types";
import Axes from "./Modules/Axes";

export default abstract class Geometrie {
  readonly position: Axes = new Axes();
  readonly origin: Axes = new Axes();
  readonly direction: Axes = new Axes();
  rotate: number = 0;
  fillColor: string = "black";

  abstract fill(ctx: CanvasRenderingContext2D): void;

  x() {
    return this.position.x;
  }

  y() {
    return this.position.y;
  }

  transladedX() {
    return this.position.x + this.origin.x;
  }

  transladedY() {
    return this.position.y + this.origin.y;
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
    return this.origin.x;
  }

  getOriginY(): number {
    return this.origin.y;
  }

  getOrigin(): Axles {
    return {
      x: this.getOriginX(),
      y: this.getOriginY(),
    };
  }

  getRotate(): number {
    return this.rotate;
  }

  getDirectionX(): number {
    return this.direction.x;
  }

  getDirectionY(): number {
    return this.direction.y;
  }

  getDirection(): Axles {
    return {
      x: this.getDirectionX(),
      y: this.getDirectionY(),
    };
  }

  setDirectionX(x: number) {
    this.direction.x = x;
  }

  setDirectionY(y: number) {
    this.direction.y = y;
  }

  setDirection(direction: Axles) {
    this.setDirectionX(direction.x);
    this.setDirectionY(direction.y);
  }

  setX(x: number) {
    this.position.x = x;
  }

  setY(y: number) {
    this.position.y = y;
  }

  incrementX(x: number) {
    this.position.x += x;
  }

  incrementY(y: number) {
    this.position.y += y;
  }

  setRotate(rad: number) {
    this.rotate = rad;
  }

  setOriginX(x: number) {
    this.origin.x = x;
  }

  setOriginY(y: number) {
    this.origin.y = y;
  }

  setOrigin(origin: Axles) {
    this.setOriginX(origin.x);
    this.setOriginY(origin.y);
  }

  relativeWith(base: Geometrie, options?: Partial<Axles>) {
    let { x, y } = options ?? {};

    if (x) {
      this.setOriginX(-(base.getOriginX() + x));
    }

    if (y) {
      this.setOriginY(-(base.getOriginY() + y));
    }

    this.setRotate(Math.atan2(base.getDirectionY(), base.getDirectionX()));

    this.setX(base.transladedX() - this.getOriginX());
    this.setY(base.transladedY() - this.getOriginY());
  }

  rotateToDirection(from: Axles, to: Axles) {
    const distanceX = to.x - from.x;
    const distanceY = to.y - from.y;
    const hpyt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    this.setDirection({
      x: distanceX / hpyt,
      y: distanceY / hpyt,
    });

    this.setRotate(Math.atan2(distanceY, distanceX));
  }

  directionTo(from: Axles, to: Axles, speed: number = 0.5) {
    const distanceX = to.x - from.x;
    const distanceY = to.y - from.y;

    const hypt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const directionX = distanceX / hypt;
    const directionY = distanceY / hypt;

    this.setDirectionX(directionX);
    this.setDirectionY(directionY);

    this.incrementX(directionX * speed);
    this.incrementY(directionY * speed);
  }
}
