a = 210;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60);
}

function draw() {
  clear();
  let display = touches.length;
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  fill(0);
  text("touches " + display, 5, 100);
  text("speed " + speed, 5, 180);

    noStroke();
    fill(230);
    ellipse (mouseX, mouseY, 30);
    fill(a);
    ellipse (mouseX, mouseY, 20);
    
    if(mouseIsPressed) {
      a = 185;
    }else {
      a = 210;
    }

  // if (touchStarted){
  //   fill(100);
  //   ellipse (mouseX, mouseY, 25);
  //   fill(150);
  //   ellipse (mouseX, mouseY, 20);

  // }

}
// if (touchEnded) {

// }