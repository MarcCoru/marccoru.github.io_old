
var WALL=1

let sketch = function(p) {

p.setup = function() {

  var cnv = p.createCanvas(800,400);
  cnv.parent('#wall1');
  console.log(WALL)

  left_star = new Star([0, p.height/2],p)
  right_star = new Star([p.width, p.height/2],p)
  top_star = new Star([p.width/2, p.height],p)
  bottom_star = new Star([p.width/2, 0],p)

  center_star = new Star([p.width/2, p.height/2],p)

  bottom_left_star = new Star([0, p.height],p)
  bottom_right_star = new Star([p.width, p.height],p)
  top_left_star = new Star([0, 0],p)
  top_right_star = new Star([p.width, 0],p)

  coloryellow = p.color(YELLOWHEX);
  colorred = p.color(REDHEX);
  colorblue = p.color(BLUEHEX);

}


p.draw = function() {
  p.background(255);

  if ([1,4,5,7].includes(WALL)){
    p.stroke(colorred)
    left_star.draw()
    right_star.draw()
    top_star.draw()
    bottom_star.draw()
  }

  if ([3,5,6,7].includes(WALL)){
    p.stroke(coloryellow)
    center_star.draw()
  }

  if ([2,4,6,7].includes(WALL)){
    p.stroke(colorblue)
    bottom_left_star.draw()
    bottom_right_star.draw()
    top_left_star.draw()
    top_right_star.draw()
  }

}

}

let myp5 = new p5(sketch);
