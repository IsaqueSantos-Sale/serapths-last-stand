import Time from "./Time";

export default class Loop {
  private _firstLoop: boolean = true;

  constructor(readonly time: Time) {}

  init = () => {};
  update = () => {};
  render = () => {};

  private _loop(timeStamp: number) {
    if (this._firstLoop) {
      this.init();
      this._firstLoop = false;
    }

    this.time.handle(timeStamp);

    this.update();
    this.render();

    requestAnimationFrame((t) => this._loop(t));
  }

  start() {
    requestAnimationFrame((t) => this._loop(t));
  }
}
