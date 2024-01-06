import Box2 from "@Src/Draw/Box2"
import { canvas } from "@Src/index"
import mageMovimentation from "./Scripts/mageMovimentation"
import mageGravity from "./Scripts/mageGravity"

export default class Mage {
    sprite = new Box2(100, 100, 30, 60)
    inFloor = false
    inJump = false

    constructor() {
        this.sprite.fillColor = 'white'
    }

    bordersCollider() {
        const { position, size } = this.sprite
        const { resolution } = canvas

        if (position.x <= 0) {
            position.x = 0
        }

        if (position.x + size.x >= resolution.x) {
            position.x = resolution.x - size.x
        }

        if (position.y <= 0) {
            position.y = 0
        }

        if (position.y + size.y >= resolution.y) {
            position.y = resolution.y - size.y
            this.inFloor = true
        }
    }

    update() {
        mageGravity(this)
        mageMovimentation(this)
        this.bordersCollider()
    }

    render() {
        this.sprite.fill(canvas.context)
    }
}