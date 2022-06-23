const m = math.random(-1, 1);
const b = math.random(-1, 1);

function f(x) {
    // formula for a line = y = mx + b
    return m*x+b;
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = (y > f(x))? -1 : 1;
    }

    pixel() {
        return vec2.create(math.map(this.x, -1, 1, 0, renderer.width),
                           math.map(this.y, -1, 1, renderer.height, 0));
    }

    draw() {
        if(this.type == 1)
            renderer.strokeColor = new color(0, 150, 0);
        else if(this.type == -1)
            renderer.strokeColor = new color(0, 0, 150);

        renderer.fillColor = new color(25, 25, 25);
        renderer.circle(new circle(this.pixel(), 15));
    }
}