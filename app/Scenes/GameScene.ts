import GameObjectsProvider from "@Src/Providers/GameObjectsProvider";

export default abstract class GameScene {
  readonly objects: GameObjectsProvider = new GameObjectsProvider();

  onUpdate() {
    this.objects.callUpdates();
  }

  onRender() {
    this.objects.callRenders();
  }
}
