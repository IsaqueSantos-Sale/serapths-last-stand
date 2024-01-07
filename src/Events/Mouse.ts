import { canvas } from "..";

export default class Mouse {
  x: number = 0;
  y: number = 0;

  constructor() {
    canvas.screen.addEventListener("mousemove", (event) =>
      this.handlerMouseMove(event)
    );
  }

  handlerMouseMove(event: MouseEvent) {
    const { offsetX, offsetY } = event;

    this.x = offsetX * (canvas.resolution.x / canvas.size.x);
    this.y = offsetY * (canvas.resolution.y / canvas.size.y);
  }
}
