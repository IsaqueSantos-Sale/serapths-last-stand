import { keyboard } from "@Src/index";
import Mage from "../Mage";

const maxJump = 1
const maxHeightJump = 100
const accelerationJump = 3
const speedX = 6
let totalJump = 0
let heightJump = 0
let velocityJump = 0
let inAir = false

export default function mageMovimentation(mage: Mage) {
    const { position } = mage.sprite
    const { isDown, reset } = keyboard

    if (isDown('KeyA')) {
        position.x -= speedX
    }

    if (isDown('KeyD')) {
        position.x += speedX
    }

    if ((mage.inFloor || mage.inJump || inAir) && isDown('Space') && totalJump < maxJump) {
        heightJump = 0
        velocityJump = 0
        mage.inJump = true
        mage.inFloor = false
        totalJump++
        console.log(totalJump)

    }

    if (mage.inJump && heightJump <= maxHeightJump) {
        inAir = true
        velocityJump += accelerationJump
        heightJump += velocityJump
        position.y -= velocityJump
    }

    if (heightJump >= maxHeightJump) {
        mage.inJump = false
    }


    if (mage.inFloor) {
        totalJump = 0
        velocityJump = 0
        heightJump = 0
    }
}