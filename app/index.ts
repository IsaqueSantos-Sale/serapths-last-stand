import { canvas } from "@Src/index"
import Mage from "./Objects/Mage"

const mage = new Mage()

const update = () => {
    mage.update()
}

const render = () => {
    mage.render()
}


const loop = () => {
    canvas.context.clearRect(0, 0, canvas.size.x, canvas.size.y)
    canvas.context.fillRect(0, 0, canvas.size.x, canvas.size.y) // BG black

    update()
    render()

    requestAnimationFrame(loop)
}

loop()