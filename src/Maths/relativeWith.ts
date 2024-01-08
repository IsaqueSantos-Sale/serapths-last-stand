import { Axles } from "@Src/Types";

export type RelativeData = {
  position: Axles;
  origin: Axles;
  rotate: number;
};

export type RelativeAjust = {
  rotate: number;
} & Axles;

export default function relativeWith(
  target: RelativeData,
  base: RelativeData,
  ajust: Partial<RelativeAjust> = { x: 0, y: 0, rotate: 0 }
) {
  let { x, y, rotate } = ajust;
  if (!x) x = 0;
  if (!y) y = 0;
  if (!rotate) rotate = 0;

  target.origin.x = base.origin.x - x;
  target.origin.y = base.origin.y - y;

  target.rotate = base.rotate + rotate;

  target.position.x = base.position.x + x;
  target.position.y = base.position.y + y;
}
