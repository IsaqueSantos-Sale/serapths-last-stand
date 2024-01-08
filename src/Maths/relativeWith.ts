import Object from "@App/Objects/Object";
import { Axles } from "@Src/Types";

export type RelativeData = {
  position: Axles;
  origin: Axles;
  rotate: number;
};

export default function relativeWith(
  target: Object,
  base: Object,
  options?: Partial<Axles>
) {
  let { x, y } = options ?? {};

  if (x) {
    target.setOriginX(-(base.getOriginX() + x));
  }

  if (y) {
    target.setOriginY(-(base.getOriginY() + y));
  }

  target.setRotate(Math.atan2(base.getDirectionY(), base.getDirectionX()));

  target.setX(base.transladedX() - target.getOriginX());
  target.setY(base.transladedY() - target.getOriginY());
}
