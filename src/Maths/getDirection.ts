import { Axles } from "@Src/Types";

export default function getDirection(from: Axles, to: Axles): Axles {
  const distanceX = to.x - from.x;
  const distanceY = to.y - from.y;
  const hypt = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  return {
    x: distanceX / hypt,
    y: distanceY / hypt,
  };
}
