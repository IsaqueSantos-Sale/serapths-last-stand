import Arc2 from "@Src/Draw/Arc2";
import { canvas } from "..";

type Handler = () => void;
type Handlers = {
  onLeft?: Handler;
  onRight?: Handler;
  onTop?: Handler;
  onDown?: Handler;
  onAny?: Handler;
};

export default function arc2ColliderCanvasBorder(
  arc: Arc2,
  handlers: Handlers
) {
  const { onAny, onDown, onLeft, onRight, onTop } = handlers;
  const { position, radius } = arc;
  const { resolution } = canvas;

  if (position.x <= 0) {
    !onAny || onAny();
    !onLeft || onLeft();
  }

  if (position.x + radius >= resolution.x) {
    !onAny || onAny();
    !onRight || onRight();
  }

  if (position.y <= 0) {
    !onAny || onAny();
    !onTop || onTop();
  }

  if (position.y + radius >= resolution.y) {
    !onAny || onAny();
    !onDown || onDown();
  }
}
