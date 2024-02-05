import Keyboard from "@Src/Events/Keyboard";
import Canvas2 from "@Src/Canvas2";
import Mouse from "@Src/Events/Mouse";
import Loop from "@Src/Events/Loop";
import Time from "@Src/Events/Time";
import GameScenesHandler from "@Src/Handlers/GameScenesHandler";

export const canvas = new Canvas2().boot();
export const keyboard = new Keyboard();
export const mouse = new Mouse();
export const time = new Time();
export const loop = new Loop(time);
export const scenes = new GameScenesHandler();

export const _DEFAULT_ = undefined;
