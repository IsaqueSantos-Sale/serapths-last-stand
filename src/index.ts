import Keyboard from "./Events/Keyboard";
import Canvas2 from "./Canvas2";
import Mouse from "./Events/Mouse";

export const canvas = new Canvas2().boot();
export const keyboard = new Keyboard();
export const mouse = new Mouse();

keyboard.addKeys(["Space", "KeyA", "KeyW", "KeyS", "KeyD"]);
