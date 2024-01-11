import GameScene from "@App/Scenes/GameScene";
import Geometrie from "@Src/Resources/Geometries/Geometrie";

export default abstract class GameObject {
  private static id: number = 0;
  private _id: number = 0;
  private _name: string | null = null;
  readonly tags: string[] = [];
  readonly scene: GameScene;
  abstract sprite: Geometrie;

  constructor(scene: GameScene, tags: string[] = []) {
    GameObject.id++;
    this._id = GameObject.id;
    this.scene = scene;
    this.tags = tags;
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateChild = this.onUpdateChild.bind(this);
    this.onCollider = this.onCollider.bind(this);
    this.onRender = this.onRender.bind(this);
  }

  id(): string {
    return String(this._id);
  }

  name(name: string): this {
    this._name = name;
    return this;
  }

  getName(): string | null {
    return this._name;
  }

  destroy = () => {};

  onUpdate() {}
  onCollider() {}
  onUpdateChild() {}
  onRender() {}

  callUpdate() {
    this.onUpdate();
    this.onCollider();
    this.onUpdateChild();
  }

  callRender() {
    this.onRender();
  }
}
