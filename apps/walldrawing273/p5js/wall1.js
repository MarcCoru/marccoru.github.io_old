
let wall1 = function(p) {

p.setup = function() {

  var cnv = p.createCanvas(800,400);
  cnv.parent('#wall1');

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

    p.stroke(colorred)
    left_star.draw()
    right_star.draw()
    top_star.draw()
    bottom_star.draw()
}

}

let wall1p5 = new p5(wall1,"wall1canvas");
