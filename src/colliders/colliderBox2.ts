import Box2 from "@Src/Draw/Box2";

export type ColliderData = {
  overlapX: number;
  overlapY: number;
  distanceX: number;
  distanceY: number;
};

export type ColliderHandler = (data: ColliderData) => void;
export type ColliderHandlerRule = (data: ColliderData) => boolean;

export type ColliderHandlers = {
  onTop?: ColliderHandler;
  onDown?: ColliderHandler;
  onLeft?: ColliderHandler;
  onRight?: ColliderHandler;
  onAny?: ColliderHandler;
  rule?: ColliderHandlerRule;
};

export default function colliderBox2(
  box1: Box2,
  box2: Box2,
  handlers: ColliderHandlers = {}
) {
  const { onDown, onLeft, onRight, onTop, onAny, rule } = handlers;
  const distanceX =
    box1.position.x + box1.size.x / 2 - (box2.position.x + box2.size.x / 2);
  const distanceY =
    box1.position.y + box1.size.y / 2 - (box2.position.y + box2.size.y / 2);
  const sumHalfWidth = box1.size.x / 2 + box2.size.x / 2;
  const sumHalfHeight = box1.size.y / 2 + box2.size.y / 2;

  if (
    Math.abs(distanceX) < sumHalfWidth &&
    Math.abs(distanceY) < sumHalfHeight
  ) {
    const overlapX = sumHalfWidth - Math.abs(distanceX);
    const overlapY = sumHalfHeight - Math.abs(distanceY);
    const colliderData: ColliderData = {
      overlapX,
      overlapY,
      distanceX,
      distanceY,
    };

    if (overlapX >= overlapY) {
      if (distanceY > 0) {
        if (!rule || rule(colliderData)) {
          !onAny || onAny(colliderData);
          !onDown || onDown(colliderData);
        }
      } else {
        if (!rule || rule(colliderData)) {
          !onAny || onAny(colliderData);
          !onTop || onTop(colliderData);
        }
      }
    } else {
      if (distanceX > 0) {
        if (!rule || rule(colliderData)) {
          !onAny || onAny(colliderData);
          !onRight || onRight(colliderData);
        }
      } else {
        if (!rule || rule(colliderData)) {
          !onAny || onAny(colliderData);
          !onLeft || onLeft(colliderData);
        }
      }
    }
  }
}
