import { Axles } from "@Src/Types";

export default function directionTo(
  target: Axles,
  from: Axles,
  to: Axles,
  speed: number = 2
) {
  const distanceX = to.x - from.x;
  const distanceY = to.y - from.y;
  const hypt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  target.x += (distanceX / hypt) * speed;
  target.y += (distanceY / hypt) * speed;
}
