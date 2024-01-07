import { canvas } from "@Src/index";
import Mage from "./Objects/Mage";
import Floor from "./Objects/Floor";
import Arc2 from "@Src/Draw/Arc2";

const mage = new Mage();

const size = 30;
const floors: Floor[] = [
  new Floor(0, canvas.resolution.y - size * 5, size),

  new Floor(size, canvas.resolution.y - size * 4, size),
  new Floor(size * 2, canvas.resolution.y - size * 3, size),
  new Floor(size * 3, canvas.resolution.y - size * 2, size),
  //
  new Floor(size * 4, canvas.resolution.y - size * 1, size),
  new Floor(size * 5, canvas.resolution.y - size * 1, size),
  new Floor(size * 6, canvas.resolution.y - size * 1, size),
  //
  new Floor(size * 7, canvas.resolution.y - size * 2, size),
  //
  new Floor(size * 8, canvas.resolution.y - size * 3, size),
  new Floor(size * 9, canvas.resolution.y - size * 3, size),
  new Floor(size * 10, canvas.resolution.y - size * 3, size),
  //
  new Floor(size * 11, canvas.resolution.y - size * 2, size),
  //d
  new Floor(size * 12, canvas.resolution.y - size * 1, size),
  new Floor(size * 13, canvas.resolution.y - size * 1, size),
  new Floor(size * 14, canvas.resolution.y - size * 1, size),
  new Floor(size * 15, canvas.resolution.y - size * 1, size),
  new Floor(size * 16, canvas.resolution.y - size * 1, size),
  //
  new Floor(size * 17, canvas.resolution.y - size * 2, size),
  new Floor(size * 18, canvas.resolution.y - size * 3, size),
  new Floor(size * 19, canvas.resolution.y - size * 4, size),
  new Floor(size * 20, canvas.resolution.y - size * 5, size),
  new Floor(size * 21, canvas.resolution.y - size * 6, size),
];

const update = () => {
  mage.update(floors);
};

const render = () => {
  mage.render();
  floors.forEach((floor) => floor.render());
};

const loop = () => {
  canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y);
  canvas.context.fillRect(0, 0, canvas.size.x, canvas.size.y); // BG black

  update();
  render();

  requestAnimationFrame(loop);
};

loop();
