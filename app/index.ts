import { canvas, loop } from "@Src/index";
import Mage from "./Objects/Mage";
import Floor from "./Objects/Floor";
import Enemy from "./Objects/Enemy";

const mage = new Mage();
const enemy = new Enemy();

enemy.targets.push(mage);

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

loop.update = () => {
  mage.update(floors);
  enemy.update();
};

loop.render = () => {
  canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y);
  canvas.context.fillRect(0, 0, canvas.size.x, canvas.size.y); // BG black

  mage.render();
  enemy.render();

  floors.forEach((floor) => floor.render());
};
