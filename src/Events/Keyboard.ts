export type Key = {
    code: string
    isDown: boolean
    reseted: boolean
}
export type Keys = Record<string, Key>

export default class Keyboard {
    private readonly keys: Keys = {}

    constructor() {
        window.addEventListener('keydown', (e) => this.handleKeydown(e))
        window.addEventListener('keyup', (e) => this.handleKeyup(e))

        this.isDown = this.isDown.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleKeydown(event: KeyboardEvent) {
        const { code } = event
        if (!(code in this.keys)) return
        const key = this.keys[code]

        if (!key.reseted) key.isDown = true
    }

    handleKeyup(event: KeyboardEvent) {
        const { code } = event
        if (!(code in this.keys)) return
        const key = this.keys[code]

        key.isDown = false
        key.reseted = false
    }

    addKeys(codes: string[]) {
        codes.forEach(code => {
            this.keys[code] = { code, isDown: false, reseted: false }
        });
    }

    isDown(code: string): boolean {
        return code in this.keys && this.keys[code].isDown
    }

    reset(code: string) {
        if (code in this.keys) {
            const key = this.keys[code]
            key.isDown = false
            key.reseted = true
        }
    }

}