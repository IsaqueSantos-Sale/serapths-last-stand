import { canvas, loop, scenes } from "@Src/index";
import ArenaScene from "./Scenes/ArenaScene";

const arena_scene = new ArenaScene();

scenes.add(arena_scene);

scenes.use("arena");

loop.update = () => {
  const scene = scenes.current();

  if (scene) {
    scene.onUpdate();
  }
};

loop.render = () => {
  canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y);
  canvas.context.fillRect(0, 0, canvas.size.x, canvas.size.y); // BG black

  const scene = scenes.current();

  if (scene) {
    scene.onRender();
  }
};
