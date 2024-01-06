import Mage from "../Mage";

let velocity = 0
export default function mageGravity(mage: Mage) {
    if(mage.inFloor && !mage.inJump) {
        velocity = 0
        return
    };

    const { position } = mage.sprite
    const acceleration = 1

    velocity += acceleration

    position.y += velocity
}