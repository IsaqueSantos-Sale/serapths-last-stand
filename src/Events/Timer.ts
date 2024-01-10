import { time } from "..";

export default class Timer {
  private _timeStamp: number = 0;
  private _isIdle: boolean = false;
  private _isTimeZero: boolean = true;

  constructor(private _targetTimeMS: number) {}

  stop() {
    this._isIdle = true;
  }

  start() {
    this._timeStamp = 0;
    this._isIdle = false;
  }

  reset() {
    this._timeStamp = 0;
  }

  resume() {
    this._isIdle = false;
  }

  run(): this {
    this._timeStamp += time.delta();
    return this;
  }

  timeStamp(): number {
    return this._timeStamp;
  }

  hasElapsed(): boolean {
    if (this._isTimeZero) {
      this._isTimeZero = false;
      return true;
    }
    if (this._isIdle) return false;

    const hasElapsed = this._timeStamp >= this._targetTimeMS;

    return hasElapsed;
  }
}
