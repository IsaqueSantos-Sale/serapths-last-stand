import { canvas } from "..";

export default class Mouse {
  x: number = 0;
  y: number = 0;
  isDown: boolean = false;
  isClick: boolean = false;

  constructor() {
    canvas.screen.addEventListener("mousemove", (event) =>
      this.handleMouseMove(event)
    );
    canvas.screen.addEventListener("mousedown", (event) =>
      this.handleMouseDown(event)
    );
    canvas.screen.addEventListener("mouseup", (event) =>
      this.handleMouseUp(event)
    );
  }

  handleMouseMove(event: MouseEvent) {
    const { offsetX, offsetY } = event;

    this.x = offsetX * (canvas.resolution.x / canvas.size.x);
    this.y = offsetY * (canvas.resolution.y / canvas.size.y);
  }

  handleMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.isClick = true;
  }

  handleMouseUp(event: MouseEvent) {
    this.isDown = false;
    this.isClick = false;
  }

  reset() {
    this.isClick = false;
  }
}
