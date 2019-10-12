function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();

  for (i = 0; i <= 200; i += 10) {

    line(200 - i, i, 200 + i, i);

  }

  for (l = 0; l <= 200; l += 10) {

    line(200 - l, 400 - l, 200 + l, 400 - l);
  }
  
}
