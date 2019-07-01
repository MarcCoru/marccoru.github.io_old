/*

Implementaiton of "Wall Drawing 273" by Sol LeWitt, September 1975

This concept art is defined by the following:

A six-inch (15 cm) grid covering the walls. Lines from corners, sides, and center of the walls to random points on the grid.

1st wall: Red lines from the midpoints of four sides;

2nd wall: Blue lines from four corners;

3rd wall: Yellow lines from the center;

4th wall: Red lines from the midpoints of four sides, blue lines from four corners;

5th wall: Red lines from the midpoints of four sides, yellow lines from the center;

6th wall: Blue lines from four corners, yellow lines from the center;

7th wall: Red lines from the midpoints of four sides, blue lines from four corners, yellow lines from the center.

Each wall has an equal number of lines. (The number of lines and their length are determined by the draftsman.)

implented by Marc Russwurm
*/

// number of lines per star
var N_LINES = 15

// define grid and canvas
var N_GRID_X = 20
var N_GRID_Y = 20
var CANVASWIDTH = 800
var CANVASHEIGHT = 400

// define colos
var REDHEX = "#fb4f4f"
var BLUEHEX = "#6cc0e5"
var YELLOWHEX = "#fbc93d"

// Animation configurations
// hold position for this number of frames
var CONFIGURATION_FRAMES = 200
// transition to new position in this number of frames
var TRANSITION_FRAMES = 10

class Star {

  constructor(origin, p) {
    this.origin = origin;
    this.grid = build_grid(p.width, p.height);
    this.p = p

    this.dst = this.sample_new_dst(this.grid)
    this.next_dst = this.sample_new_dst(this.grid)
  }

  draw() {
    if (this.p.frameCount % CONFIGURATION_FRAMES==0) {
      this.dst = this.next_dst
      this.next_dst = this.sample_new_dst(this.grid)
    }

    this.diff = pt_diff(this.next_dst,this.dst)
    this.dst = update_dst(this.dst,this.diff)

    for (var i = 0; i < this.dst.length; i += 1) {
      this.p.line(this.origin[0], this.origin[1], this.dst[i][0], this.dst[i][1])
    }
  }

  sample_new_dst(grid) {
   return this.p.shuffle(grid).slice(0,N_LINES)
  }


}

function pt_diff(a, b) {
  diff = []
  for (var i = 0; i < a.length; i += 1){
    x = a[i][0]-b[i][0]
    y = a[i][1]-b[i][1]
    diff.push([x,y])
  }
  return diff
}

function update_dst(dst, diff) {
  for (var i = 0; i < dst.length; i += 1) {

    dx = diff[i][0]/TRANSITION_FRAMES
    dy = diff[i][1]/TRANSITION_FRAMES

    dst[i][0] += dx
    dst[i][1] += dy
  }
  return dst
}

function build_grid(width, height) {
  stepx = width / N_GRID_X
  stepy = width / N_GRID_Y

  grid = [];

  for (var x = stepx; x < width; x += stepx) {
    for (var y = stepy; y < height; y += stepy) {
      grid.push([x, y])
    }
  }
  return grid
}
