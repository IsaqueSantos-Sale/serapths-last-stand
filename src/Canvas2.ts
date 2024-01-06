export default class Canvas2 {
    readonly screen = document.querySelector('canvas') as HTMLCanvasElement
    readonly context = this.screen.getContext('2d') as CanvasRenderingContext2D

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
        this.screen.width = this.resolution.x
        this.screen.height = this.resolution.y
        return this
    }

    setSize(x: number, y: number): this {
        this.size.x = x
        this.size.y = y
        this.screen.style.width = `${this.size.x}px`
        this.screen.style.height = `${this.size.y}px`
        return this
    }

    boot() {
        this.screen.style.border = '1px solid'
        this.screen.style.imageRendering = 'pixelated'
        this.setSize(800, 450).setResolutino(650, 450)
        return this
    }
}