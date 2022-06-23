class vec2 {
  constructor(a, b) {
    if(a == undefined) {
      this.x = this.y = 0;
    } else if(b == undefined) {
      if(typeof a == 'object') {
        this.x = a.x;
        this.y = a.y;
      } else {
        this.x = this.y = a;
      }
    } else {
      this.x = a;
      this.y = b;
    }
  }
  static create(a, b) {
    return new vec2(a, b);
  }

  clone() {
    return new vec2(this.x, this.y);
  }

  add(a) {
    if(typeof a == 'object') {
      this.x += a.x;
      this.y += a.y;
    } else {
      this.x += a;
      this.y += a;
    }

    return this;
  }
  subtract(a) {
    if(typeof a == 'object') {
      this.x -= a.x;
      this.y -= a.y;
    } else {
      this.x -= a;
      this.y -= a;
    }
    
    return this;
  }
  multiply(a) {
    if(typeof a == 'object') {
      this.x *= a.x;
      this.y *= a.y;
    } else {
      this.x *= a;
      this.y *= a;
    }
    
    return this;
  }
  divide(a) {
    if(typeof a == 'object') {
      this.x /= a.x;
      this.y /= a.y;
    } else {
      this.x /= a;
      this.y /= a;
    }
    
    return this;
  }

  static add(a, b) {
    let r = new vec2(a);
    return r.add(b);
  }
  static subtract(a, b) {
    let r = new vec2(a);
    return r.subtract(b);
  }
  static multiply(a, b) {
    let r = new vec2(a);
    return r.multiply(b);
  }
  static divide(a, b) {
    let r = new vec2(a);
    return r.divide(b);
  }

  equals(v) {
    if(typeof v == 'object')
      return (this.x == v.x) && (this.y == v.y);
    else
      return (this.x == v) && (this.y == v);
  }
  static equals(v1, v2) {
    return v1.equals(v2);
  }

  magnitude() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
  normalize() {
    let mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
    return this;
  }
  dot(a) {
    return (this.x * a.x) + (this.y * a.y);
  }
  negative() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  rotate(theta) {
    this.x = x * Math.cos(theta) - this.y * Math.sin(theta);
    this.y = x * Math.sin(theta) + this.y * Math.cos(theta);
  }

  static magnitude(a) {
    let r = new vec2(a);
    return r.magnitude();
  }
  static normalize(a) {
    let r = new vec2(a);
    return r.normalize();
  }
  static dot(a, b) {
    let r = new vec2(a);
    return r.dot(b);
  }
  static negative(a) {
    let r = new vec2(a);
    return r.negative();
  }
  static rotate(v, theta) {
    return v.rotate(theta);
  }

  distance(a) {
    let dx = a.x - this.x;
    let dy = a.y - this.y;
    return Math.sqrt((dx * dx) + (dy * dy));
  }
  static distance(a, b) {
    return a.distance(b);
  }

  zero() {
    this.x = 0;
    this.y = 0;
  }
  static get zero() {
    return new vec2(0, 0);
  }

  print() {
    console.log(`Vector2D [ x: ${this.x}, y: ${this.y} ]`);
    return this;
  }
  static print(a) {
    return a.print();
  }
}