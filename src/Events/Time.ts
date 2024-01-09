export default class Time {
  private _prevTime: number = 0;
  private _deltaTime: number = 0;

  constructor() {
    this.delta = this.delta.bind(this);
  }

  delta() {
    return this._deltaTime;
  }

  handle(timeStamp: number) {
    this._deltaTime = timeStamp - this._prevTime;
    this._prevTime = timeStamp;
  }
}
