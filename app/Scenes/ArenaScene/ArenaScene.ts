import Floor from "@App/Objects/Floor";
import GameScene from "../GameScene";
import { canvas } from "@Src/global";
import Mage from "@App/Objects/Mage";
import Enemy from "@App/Objects/Enemy";

export default class ArenaScene extends GameScene {
  size = 30;

  floors: Floor[] = [
    new Floor(this, 0, canvas.resolution.y - this.size * 5, this.size),

    new Floor(this, this.size, canvas.resolution.y - this.size * 4, this.size),
    new Floor(
      this,
      this.size * 2,
      canvas.resolution.y - this.size * 3,
      this.size
    ),
    new Floor(
      this,
      this.size * 3,
      canvas.resolution.y - this.size * 2,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 4,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 5,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 6,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 7,
      canvas.resolution.y - this.size * 2,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 8,
      canvas.resolution.y - this.size * 3,
      this.size
    ),
    new Floor(
      this,
      this.size * 9,
      canvas.resolution.y - this.size * 3,
      this.size
    ),
    new Floor(
      this,
      this.size * 10,
      canvas.resolution.y - this.size * 3,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 11,
      canvas.resolution.y - this.size * 2,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 12,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 13,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 14,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 15,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    new Floor(
      this,
      this.size * 16,
      canvas.resolution.y - this.size * 1,
      this.size
    ),
    //
    new Floor(
      this,
      this.size * 17,
      canvas.resolution.y - this.size * 2,
      this.size
    ),
    new Floor(
      this,
      this.size * 18,
      canvas.resolution.y - this.size * 3,
      this.size
    ),
    new Floor(
      this,
      this.size * 19,
      canvas.resolution.y - this.size * 4,
      this.size
    ),
    new Floor(
      this,
      this.size * 20,
      canvas.resolution.y - this.size * 5,
      this.size
    ),
    new Floor(
      this,
      this.size * 21,
      canvas.resolution.y - this.size * 6,
      this.size
    ),
  ];

  constructor() {
    super();
    const mage = new Mage(this).name("player");
    const enemy = new Enemy(this);

    enemy.targets.push(mage);

    this.objects.add(mage);
    this.objects.add(enemy);

    this.floors.forEach((floor) => this.objects.add(floor));
  }
}
