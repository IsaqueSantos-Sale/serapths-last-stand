import { canvas, keyboard, loop, mouse, scenes } from "@Src/global";

keyboard.addKeys(["Space", "KeyA", "KeyW", "KeyS", "KeyD"]);

loop.init = () => {
  const scene = scenes.current();
  if (scene) {
    scene.onInit();
  }
};

loop.update = () => {
  const scene = scenes.current();

  if (scene) {
    scene.onUpdate();
  }

  mouse.reset();
};

loop.render = () => {
  canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y);

  const scene = scenes.current();

  if (scene) {
    scene.onRender();
  }
};

loop.start();
