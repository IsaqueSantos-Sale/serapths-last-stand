import Object from "@App/Objects/Object";
import { Axles } from "@Src/Types";

export default function rotateToDirection(
  target: Object,
  from: Axles,
  to: Axles
) {
  const distanceX = to.x - from.x;
  const distanceY = to.y - from.y;
  const hpyt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  target.setDirection({
    x: distanceX / hpyt,
    y: distanceY / hpyt,
  });

  target.setRotate(Math.atan2(distanceY, distanceX));
}
