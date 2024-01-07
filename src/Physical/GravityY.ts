export type Axle = { y: number };

export default class GravityY {
  private acceleration: number = 0;
  private velocity: number = 0;
  private inverted: boolean = false;

  constructor(acceleration: number) {
    this.acceleration = acceleration;
  }

  getVelocity(): number {
    return this.velocity;
  }

  apply(axle: Axle) {
    this.velocity += this.acceleration;

    if (this.inverted) {
      axle.y -= this.velocity;
      return;
    }

    axle.y += this.velocity;
  }

  reset() {
    this.velocity = 0;
  }

  invert() {
    this.inverted = !this.inverted;
  }

  resetAndInvert() {
    this.reset();
    this.invert();
  }
}
