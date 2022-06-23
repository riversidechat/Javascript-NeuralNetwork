class renderer {
  static #canvs = [];
  static #count = 0;
  static #current = 0;

  static strokeWeight = 10;
  static strokeEnd = 'round';
  static strokeJoin = 'round';

  static fillColor = color.none;
  static strokeColor = color.none;

  static get canvas() {
    return renderer.#canvs[renderer.#current];
  }
  static set canvas(canv) {
    renderer.#canvs[renderer.#current] = canv;
  }

  static addCanvas(canv) {
    renderer.#canvs.push(canv);
    return renderer.#count++;
  }
  static createCanvas(area) {
    return renderer.addCanvas(canvas.create(area));
  }

  static get activeCanvas() {
    return renderer.#current;
  }
  static set activeCanvas(id) {
    renderer.#current = id;
  }

  static screenWidth() { return window.innerWidth; }
  static screenHeight() { return window.innerHeight; }

  static get width() {
    return renderer.canvas.width;
  }
  static set width(width) {
    return renderer.canvas.width = width;
  }
  static get height() {
    return renderer.canvas.height;
  }
  static set height(height) {
    return renderer.canvas.height = height;
  }

  static #configCanvas(canvas) {
    canvas.ctx.fillStyle = renderer.fillColor.string();
    canvas.ctx.strokeStyle = renderer.strokeColor.string();
    
    canvas.ctx.lineWidth = renderer.strokeWeight;
    canvas.ctx.lineCap = renderer.strokeEnd;
    canvas.ctx.lineJoin = renderer.strokeJoin;
  }
  static #begin(canvas) {
    canvas.ctx.beginPath();
  }
  static #end(canvas) {
    canvas.ctx.closePath();
    canvas.ctx.stroke();
    canvas.ctx.fill();
  }
  
  static background(c) {
    let temp = renderer.fillColor;
    renderer.fillColor = c;

    let canv = renderer.canvas;
    let area = new rect(0, 0, canv.width, canv.height);
    renderer.rect(area);
    renderer.fillColor = temp;
  }

  static rect(rect) {
    let canvas = renderer.canvas;
    renderer.#configCanvas(canvas);
    renderer.#begin(canvas);
    
    canvas.ctx.moveTo(rect.left, rect.top);
    canvas.ctx.lineTo(rect.right, rect.top);
    canvas.ctx.lineTo(rect.right, rect.bottom);
    canvas.ctx.lineTo(rect.left, rect.bottom);

    renderer.#end(canvas);
    return renderer;
  }
  static line(s, e) {
    let canvas = renderer.canvas;
    renderer.#configCanvas(canvas);
    renderer.#begin(canvas);
    
    canvas.ctx.moveTo(s.x, s.y);
    canvas.ctx.lineTo(e.x, e.y);

    renderer.#end(canvas);
    return renderer;
  }
  static circle(circle) {
    let canvas = renderer.canvas;
    renderer.#configCanvas(canvas);
    renderer.#begin(canvas);
    
    canvas.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

    renderer.#end(canvas);
    return renderer;
  }
  static ellipse(ellipse) {
    let canvas = renderer.canvas;
    renderer.#configCanvas(canvas);
    renderer.#begin(canvas);
    
    canvas.ctx.ellipse(ellipse.x, ellipse.y, ellipse.xradius, ellipse.yradius, 0, 0, 2 * Math.PI);

    renderer.#end(canvas);
    return renderer;
  }
}