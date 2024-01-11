import GameObjectsHandler from "@Src/Handlers/GameObjectsHandler";
import { canvas } from "@Src/index";

export default abstract class GameScene {
  readonly objects: GameObjectsHandler = new GameObjectsHandler();

  onInit() {
    this.objects.callInits();
  }

  onUpdate() {
    this.objects.callUpdates();
  }

  onRender() {
    canvas.context.fillRect(0, 0, canvas.resolution.x, canvas.resolution.y);

    this.objects.callRenders();
  }
}
