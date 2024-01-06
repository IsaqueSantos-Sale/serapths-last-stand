import { keyboard } from "@Src/index";
import Mage from "../Mage";

const maxJump = 1
const maxHeightJump = 130
const accelerationJump = 5
const speedX = 6
let totalJump = 0
let heightJump = 0
let velocityJump = 0

export default function mageMovimentation(mage: Mage) {
    const { position } = mage.sprite
    const { isDown } = keyboard

    if (isDown('KeyA')) {
        position.x -= speedX
    }

    if (isDown('KeyD')) {
        position.x += speedX
    }

    if (mage.inFloor && isDown('Space') && totalJump < maxJump) {
        mage.inJump = true
        mage.inFloor = false
        totalJump++
    }

    if (mage.inJump && heightJump <= maxHeightJump) {
        velocityJump += accelerationJump
        heightJump += velocityJump
        position.y -= velocityJump
    }

    if (heightJump >= maxHeightJump) {
        mage.inJump = false
    }

    if (mage.inFloor && !mage.inJump) {
        totalJump = 0
        velocityJump = 0
        heightJump = 0
    }
}