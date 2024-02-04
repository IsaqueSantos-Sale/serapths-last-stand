export default class Vector2 {
  constructor(private x: number = 0, private y: number = 0) {}

  X() {
    return this.x;
  }

  Y() {
    return this.y;
  }

  sum(v: Vector2) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mag(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  normalize() {
    this.x /= this.mag();
    this.y /= this.mag();
  }

  mult(n: number): Vector2 {
    return new Vector2(this.x * n, this.y * n);
  }

  div(n: number): Vector2 {
    return new Vector2(this.x / n, this.y / n);
  }

  def(x?: number, y?: number) {
    this.x = x ?? this.x;
    this.y = y ?? this.y;
  }
}
