let bird;
let pipes = []
let gameState = true
let gameSpeed = 50     
let score = 103

function preload(){
    birdImg = loadImage("diltas1.png")
    wallImg = loadImage("wallImg.jpg")
    
}

function setup() {
    createCanvas(480, 640);
    bird = new Bird();
    pipes.push(new Pipe());
    textSize(50);
  }
  
  function draw() {
    if (gameState){
    background(120); 
    
    for (var i = pipes.length-1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
  
      if (pipes[i].hits(bird)) {
        gameState = false
      }
  
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }
    
    //score = Math.round(bird.fitness / 60)
    fill(0, 102, 153);
    text(str(score) + " saniye" ,width/2, 50)
    bird.update();
    bird.show();
    console.log(bird.fitness)
    
    if (frameCount % gameSpeed == 0) {
      pipes.push(new Pipe());
    }
  }
  else{
      background(0)
      textAlign(CENTER);
      text(str(score) + " saniye" ,width/2, height / 2)
      let id = makeid();
      text(id ,width/2, (height / 2)+50)
      noLoop();
  }
}
  
  function keyPressed() {
    if (key == ' ') {
      bird.up();
      //console.log("SPACE");
    }
  }
  function mousePressed(){
      bird.up();
      if (!gameState){
        gameState = true;
      }
  }
  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
