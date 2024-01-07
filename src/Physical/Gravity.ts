export default class Gravity {
    private accelerationX: number = 0
    private accelerationY: number = 0
    private maxVelocityX: number = 0
    private maxVelocityY: number = 0
    public velocityX: number = 0
    public velocityY: number = 0


    setMaxX(max: number) {
        this.maxVelocityX = max
    }

    setMaxY(max: number) {
        this.maxVelocityY = max
    }

    setMax(x: number, y: number): this {
        this.setMaxX(x)
        this.setMaxY(y)
        return this
    }

    isMaxVelocityX(): boolean {
        return this.velocityX >= this.maxVelocityX
    }
    isMaxVelocityY(): boolean {
        return this.velocityY >= this.maxVelocityY
    }

    resetX() {
        this.velocityX = 0
    }

    resetY() {
        this.velocityY = 0
    }

    reset() {
        this.resetX()
        this.resetY()
    }

    applyDown(target: { y: number }, acceleration: number | null = null) {
        this.accelerationY = acceleration ?? this.accelerationY

        if (!this.isMaxVelocityY()) {
            this.velocityY += this.accelerationY
        }

        target.y += this.velocityY
    }

    applyUp(target: { y: number }, acceleration: number | null = null) {
        this.accelerationY = acceleration ?? this.accelerationY

        if (!this.isMaxVelocityY()) {
            this.velocityY += this.accelerationY
        }

        target.y -= this.velocityY
    }

    applyLeft(target: { x: number }, acceleration: number) {
        this.accelerationX = acceleration ?? this.accelerationX

        if (!this.isMaxVelocityX()) {
            this.velocityX += this.accelerationX
        }

        target.x -= this.velocityX
    }

    applyRight(target: { x: number }, acceleration: number) {
        this.accelerationX = acceleration ?? this.accelerationX

        if (!this.isMaxVelocityX()) {
            this.velocityX += this.accelerationX
        }

        target.x += this.velocityX
    }
}   