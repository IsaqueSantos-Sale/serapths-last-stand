import Keyboard from "./Events/Keyboard"
import Canvas2 from "./Canvas2"

export const keyboard = new Keyboard()
export const canvas = new Canvas2().boot()

keyboard.addKeys(['Space', 'KeyA', 'KeyW', 'KeyS', 'KeyD'])