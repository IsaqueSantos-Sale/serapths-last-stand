import GameObjectsHandler from "@Src/Handlers/GameObjectsHandler";

export default abstract class GameScene {
  readonly objects: GameObjectsHandler = new GameObjectsHandler();

  constructor(readonly name: string) {}

  onUpdate() {
    this.objects.callUpdates();
  }

  onRender() {
    this.objects.callRenders();
  }
}
