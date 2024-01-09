export default class Time {
  private _prevTime: number = 0;
  private _deltaTime: number = 0;
  private _timeStamp: number = 0;

  fps() {
    return 1000 / this.delta();
  }

  delta() {
    return this._deltaTime;
  }

  timeStamp() {
    return this._timeStamp;
  }

  handle(timeStamp: number) {
    this._timeStamp = timeStamp;
    this._deltaTime = timeStamp - this._prevTime;
    this._prevTime = timeStamp;
  }
}
