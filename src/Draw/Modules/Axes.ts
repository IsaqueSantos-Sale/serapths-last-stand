export default class Axes {
  x: number = 0;
  y: number = 0;

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  halfX() {
    return this.x / 2;
  }

  halfY() {
    return this.y / 2;
  }
}
