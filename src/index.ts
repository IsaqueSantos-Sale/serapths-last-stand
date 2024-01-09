import Keyboard from "./Events/Keyboard";
import Canvas2 from "./Canvas2";
import Mouse from "./Events/Mouse";
import Loop from "./Events/Loop";
import Time from "./Events/Time";

export const canvas = new Canvas2().boot();
export const keyboard = new Keyboard();
export const mouse = new Mouse();
export const time = new Time();
export const loop = new Loop(time);

keyboard.addKeys(["Space", "KeyA", "KeyW", "KeyS", "KeyD"]);
loop.start();
