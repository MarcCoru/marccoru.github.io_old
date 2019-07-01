let wall2 = function(p) {

p.setup = function() {

  var cnv = p.createCanvas(800,400);
  cnv.parent('#wall2');

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


    p.stroke(colorblue)
    bottom_left_star.draw()
    bottom_right_star.draw()
    top_left_star.draw()
    top_right_star.draw()


}

}

let wall2p5 = new p5(wall2,"wall2canvas");
