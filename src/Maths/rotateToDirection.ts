import { Axles } from "@Src/Types";

export default function rotateToDirection(
  target: { rotate: number },
  from: Axles,
  to: Axles
) {
  const distanceX = to.x - from.x;
  const distanceY = to.y - from.y;
  target.rotate = Math.atan2(distanceY, distanceX);
}
