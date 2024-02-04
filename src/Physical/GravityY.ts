import Vector2 from "@Src/Resources/Geometries/Maths/Maths/Vector2";

export type GravityAxle = { y: number };

export default class GravityY {
  public readonly acceleration = new Vector2(0, 0.2);
  public readonly velocity = new Vector2();
  private inverted: boolean = false;

  apply(target: Vector2) {
    this.velocity.sum(this.acceleration);

    if (this.inverted) {
      target.sub(this.velocity);
      return;
    }

    target.sum(this.velocity);
  }

  speed(): number {
    return this.velocity.Y();
  }

  reset() {
    this.velocity.def(0, 0);
  }

  invert() {
    this.inverted = !this.inverted;
  }

  resetAndInvert() {
    this.reset();
    this.invert();
  }
}
