import GameScene from "@App/Scenes/GameScene";
import UniquiError from "@Src/Errors/UniquiError";

export type Scenes = Record<string, GameScene>;

export default class GameScenesHandler {
  private readonly _scenes: Scenes = {};
  private _current: GameScene | null = null;

  add(scene: GameScene): never | void {
    if (scene.name in this._scenes) {
      throw new UniquiError(`Scene with name ${scene.name} already defined`);
    }

    this._scenes[scene.name] = scene;
  }

  current(): GameScene | null {
    return this._current;
  }

  use(name: string) {
    this._current = this._scenes[name] ?? null;
  }
}
