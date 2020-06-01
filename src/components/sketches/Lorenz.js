const Lorenz = (p) => {

    let sigma = 20;
    let rho = 45;
    let beta = 5.9;

    let x = 0.01;
    let y = 0;
    let z = 0;

    let attractor = [];

    p.setup = () => {
        p.createCanvas(500, 500, p.WEBGL);
        p.smooth();
        p.background(0);
        p.perspective();
        p.colorMode(p.HSB);
    }

    p.draw = () => {
        let dt = 0.008;
        x += (sigma * (y - x)) * dt;
        y += (x * (rho - z) - y) * dt;
        z += (x * y - beta * z) * dt;

        attractor.push(p.createVector(x, y, z));
        if (attractor.length > 100) {
            attractor.shift()
        }
        p.scale(3);
        p.fill(0, 0, 0, 0)

        p.beginShape();
        let hu = 0;
        for (let v of attractor) {
            p.stroke(hu, 255, 255)
            p.vertex(v.x, v.y, v.z);
            hu += 0.1;
            if (hu > 255) {
                hu = 0;
            }
        }
        p.endShape()
    }
}

export default Lorenz;