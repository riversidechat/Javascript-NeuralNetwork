let mainCanvas;

let points = [];
let perceptron;

function setup() {
  mainCanvas = renderer.createCanvas(new rect(0, 0, renderer.screenWidth(), renderer.screenHeight()));

  for(let i = 0; i < 100; ++i) {
    points.push(new Point(math.random(-1, 1), math.random(-1, 1)));
  }
  perceptron = new Perceptron(2);
}

async function update(time) {
  renderer.activeCanvas = mainCanvas;
  renderer.width = renderer.screenWidth();
  renderer.height = renderer.screenHeight();
  renderer.background(new color(25, 25, 25));

  let p1 = vec2.create(-1, f(-1));
  let p2 = vec2.create(1, f(1));
  p1.x = math.map(p1.x, -1, 1, 0, renderer.width);
  p1.y = math.map(p1.y, -1, 1, renderer.height, 0);
  p2.x = math.map(p2.x, -1, 1, 0, renderer.width);
  p2.y = math.map(p2.y, -1, 1, renderer.height, 0);

  renderer.strokeColor = new color(255, 255, 255);
  renderer.line(p1, p2);

  let weights = perceptron.weights;
  p1 = vec2.create(-1, (-weights[2] - weights[0] * -1) / weights[1]);
  p2 = vec2.create(1, (-weights[2] - weights[0] * 1) / weights[1]);

  p1.x = math.map(p1.x, -1, 1, 0, renderer.width);
  p1.y = math.map(p1.y, -1, 1, renderer.height, 0);
  p2.x = math.map(p2.x, -1, 1, 0, renderer.width);
  p2.y = math.map(p2.y, -1, 1, renderer.height, 0);

  renderer.strokeColor = new color(255, 255, 255);
  renderer.line(p1, p2);

  for(let p of points) {
    p.draw();

    let guess = perceptron.guess([p.x, p.y]);
    if (guess != p.type) {
      renderer.strokeColor = new color(255, 0, 0, 0.5);
      renderer.circle(new circle(p.pixel(), 15));
    }
    
    if(mouse.down) {
      perceptron.train([p.x, p.y], p.type);
    }
  }
}
