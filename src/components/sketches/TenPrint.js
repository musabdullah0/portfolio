const TenPrint = (p) => {
    let prob = 0.5
    let d = window.innerWidth < 600 ? 20 : 30
    let x = 0
    let y = 0
    let size = p.min(window.innerWidth, window.innerHeight) - 100

    p.setup = () => {
        p.createCanvas(size, size)
        p.background(0)
    }

    p.draw = () => {
        p.stroke(255, 255, 255, 150);
        if (p.random(1) < prob) {
            p.line(x, y, x + d, y + d)
        } else {
            p.line(x, y + d, x + d, y)
        }
        x += d
        if (x > size) {
            x = 0
            y += d
            p.noStroke()
            p.fill(0)
            p.rect(0, y, size, d)

        }
        if (y > size) {
            y = 0
            p.noStroke()
            p.fill(0)
            p.rect(0, y, size, d)
        }
    }
    p.windowResized = () => {
        p.clear()
        size = p.min(window.innerWidth, window.innerHeight) - 100
        d = window.innerWidth < 600 ? 20 : 30
        p.resizeCanvas(size, size);
    }
}

export default TenPrint