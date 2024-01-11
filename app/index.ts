import { canvas, loop } from "@Src/index";
import ArenaScene from "./Scenes/ArenaScene";

const arena_scene = new ArenaScene();

loop.update = () => {
  arena_scene.onUpdate();
};

loop.render = () => {
  canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y);
  canvas.context.fillRect(0, 0, canvas.size.x, canvas.size.y); // BG black

  arena_scene.onRender();
};
