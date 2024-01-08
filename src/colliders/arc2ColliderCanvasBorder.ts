import Arc2 from "@Src/Draw/Arc2";
import { canvas } from "..";

type Handler = (overlap: number) => void;
type Handlers = {
  onLeft: Handler;
  onRight: Handler;
  onTop: Handler;
  onDown: Handler;
  onAny: Handler;
};

export default function arc2ColliderCanvasBorder(
  arc: Arc2,
  handlers: Handlers
) {
  const { onAny, onDown, onLeft, onRight, onTop } = handlers;
  const { position, radius } = arc;
  const { resolution } = canvas;

  if (position.x <= 0) {
    onAny(0);
    onLeft(0);
  }

  if (position.x + radius >= resolution.x) {
    onRight(resolution.x + radius);
    onAny(resolution.x + radius);
  }

  if (position.y <= 0) {
    onTop(0);
    onAny(0);
  }

  if (position.y + radius > resolution.y) {
    onDown(resolution.y + radius);
    onAny(resolution.y + radius);
  }
}
