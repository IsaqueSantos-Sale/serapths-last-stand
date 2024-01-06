export default class Canvas2 {
    readonly scress = document.querySelector('canvas') as HTMLCanvasElement
    readonly context = this.scress.getContext('2d') as CanvasRenderingContext2D

    readonly size = {
        x: 0,
        y: 0
    }

    readonly resolution = {
        x: 0,
        y: 0
    }

    setResolutino(x: number, y: number): this {
        this.resolution.x = x
        this.resolution.y = y
        this.scress.width = this.resolution.x
        this.scress.height = this.resolution.y
        return this
    }

    setSize(x: number, y: number): this {
        this.size.x = x
        this.size.y = y
        this.scress.style.width = `${this.size.x}px`
        this.scress.style.height = `${this.size.y}px`
        return this
    }

    boot() {
        this.scress.style.border = '1px solid'
        this.setSize(600, 450).setResolutino(650, 450)
    }
}