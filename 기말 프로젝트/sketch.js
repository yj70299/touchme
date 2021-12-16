let a= [];
a = ['더 세게', '부드럽게', '강하게', '천천히', '빠르게', '꾸욱', '살살', '위에서 아래로', '새끼 손가락으로', '코끝으로'];

let r = [];
touch = false;




function setup() {
    createCanvas(windowWidth, windowHeight);

    // for (let i = 0; i <9; i++){
    //   r[i] = ;
    }



function draw() {
  background(255);

  // fill(255);
  // noStroke();
  // rect(0, 0, windowWidth, windowHeight);
  textSize(50);
  fill(0);
  text(random(a), width/3, height/2);
  
  if(mouseIsPressed){
    touch = true;

    }
  }