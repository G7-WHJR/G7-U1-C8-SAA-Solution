var ball;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);

  //ball sprite
  ball = createSprite(150, 250, 15, 15);

  //SAA2 : set ball sprite's color to green
  ball.shapeColor = "green";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

}

function draw() {
  background("honeydew");

  if (mouseIsPressed) {

    //SAA1 : Change velocityX and velocityY to 9 
    ball.velocityX = 9; 
    ball.velocityY = 9; 
  }

  //make the ball bounce off the edges
  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB);

  drawSprites();
}


