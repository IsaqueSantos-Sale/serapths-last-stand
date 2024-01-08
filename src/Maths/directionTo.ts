import Object from "@App/Objects/Object";
import { Axles } from "@Src/Types";

export default function directionTo(
  target: Object,
  from: Axles,
  to: Axles,
  speed: number = 2
) {
  const distanceX = to.x - from.x;
  const distanceY = to.y - from.y;
  const hypt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  target.incrementX((distanceX / hypt) * speed);
  target.incrementY((distanceY / hypt) * speed);
}
