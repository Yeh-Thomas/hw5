function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  rectMode(CENTER);

  for (var i = 10; i <= 60; i += 15) {

    for (j = 40; j <= width; j += 80) {


      square(j, 200, i);


    }
  }
}
