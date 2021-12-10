let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;

let input;
let button;
let word;


function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('1x/background.png');

}

function draw() {
    image(img, 0, 0, windowWidth, windowHeight);
    // textSize(20);
    // textAlign(CENTER, CENTER);
    // fill(0);
    // text('무엇을 만지고 있나요?', width/2, height/2);

    fill(255);
    ellipse(x, y, r*2, r*2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
      xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
      yspeed = -yspeed;
    }

    if(mouseIsPressed){
        input = createInput('무엇을 만지고 있나요?');
        input.position(windowWidth/3, windowHeight/2);

        button = createButton('입력');
        button.position((windowWidth/3)+160, (windowHeight/2)-1);
        button.mousePressed(updateText);
    }
}

    function updateText() {
        textSize(30);
        word = input.value();
      
        for (let i = 0; i < 30; i++) {
          fill(random(255));
          text(word, random(width), random(height));
        }
  
}