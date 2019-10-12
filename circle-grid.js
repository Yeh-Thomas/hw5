function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (i = 20; i <= 380; i += 20) {

    for (l = 20; l <= 380; l += 20) {
      ellipse(i, l, 15);

    }
  }
}
