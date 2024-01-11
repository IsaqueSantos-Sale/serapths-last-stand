import GameObject from "@App/Objects/GameObject";

export type GameObjects = Record<string, GameObject>;
export type FindReturn = GameObject | null;

export default class GameObjectsHandler {
  private readonly gameObjects: GameObjects = {};

  constructor() {
    this.add = this.add.bind(this);
    this.findByName = this.findByName.bind(this);
  }

  all(): GameObjects {
    return this.gameObjects;
  }

  add(object: GameObject) {
    const key = object.id();
    this.gameObjects[key] = object;
  }

  findById(id: string): FindReturn {
    return this.gameObjects[id] ?? null;
  }

  findByName(name: string): FindReturn {
    for (const key in this.gameObjects) {
      const object = this.gameObjects[key];
      if (object.getName() === name) return object;
    }

    return null;
  }

  findByTags<T extends GameObject>(tags: string[]): T[] {
    const objects: T[] = [];

    for (const key in this.gameObjects) {
      const object = this.gameObjects[key];

      for (const tag of tags) {
        if (!object.tags.includes(tag)) continue;

        objects.push(object as T);
        break;
      }
    }

    return objects;
  }

  callUpdates() {
    for (const key in this.gameObjects) {
      const object = this.gameObjects[key];
      object.callUpdate();
    }
  }

  callRenders() {
    for (const key in this.gameObjects) {
      const object = this.gameObjects[key];
      object.callRender();
    }
  }
}
