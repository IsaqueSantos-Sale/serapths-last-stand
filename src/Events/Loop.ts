import Time from "./Time";

export default class Loop {
  constructor(readonly time: Time) {}

  update = () => {};
  render = () => {};

  private _loop(timeStamp: number) {
    this.time.handle(timeStamp);

    this.update();
    this.render();

    requestAnimationFrame((t) => this._loop(t));
  }

  start() {
    requestAnimationFrame((t) => this._loop(t));
  }
}
