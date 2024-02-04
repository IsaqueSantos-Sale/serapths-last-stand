import GameScene from "@App/Scenes/GameScene";
import UniquiError from "@Src/Errors/UniquiError";
import { loop } from "..";

export type GameSceneConstructor = new () => GameScene;
export type Scenes = Record<string, GameSceneConstructor>;

export default class GameScenesHandler {
  private readonly _scenes: Scenes = {};
  private _current: GameScene | null = null;

  constructor() {
    this.use = this.use.bind(this);
    this.add = this.add.bind(this);
  }

  private _getName(scene: GameSceneConstructor): string {
    return scene["name"].toLocaleLowerCase().replace("scene", "");
  }

  add(scene: GameSceneConstructor): never | void {
    const name = this._getName(scene);
    // if (name in this._scenes) {
    //   throw new UniquiError(`Scene with name ${scene.name} already defined`);
    // }
    this._scenes[name] = scene;
  }

  current(): GameScene | null {
    return this._current;
  }

  use(name: string) {
    if (!(name in this._scenes)) return;

    this._current = new this._scenes[name]();
    loop.reset();
  }
}
