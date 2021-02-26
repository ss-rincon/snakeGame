//CODE FOR DOM

 
class snakeBody 
{
  constructor(xPos, yPos)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.createMe();
  }

  className = "snakeBody";
  newX = 0;
  newY = 0;
  
 
    
  createMe()
  {
    let myBody = $("<div>")
      .attr({
      "class": this.className,
      "id": "snake"})
      .css({
      "top": this.yPos,
      "left": this.xPos
    });
    container.append(myBody);
    return myBody
  }

  moveMe(a, b)
  {
    $("#snake")
    .css({
    "top":b,
    "left":a,
    })
  }
    
    
}

class Button
{
  constructor()
  {
    this.createMe();
    
  }

  createMe()
  {
    let myBody = $("<input>")
    .attr({
      "type": "submit",

    });
    container.append(myBody);
    myBody.on("click", function(){
      let snake = new snakeBody(initX, initY);
      snakeParts.push(snake);
      console.log({snakeParts})
    })
  }
}


 

//FUNCTIONS
function logKey(e)
{
  keyPress = e.code;
  console.log(keyPress)
}

function reWait(i)
{

  move();
  snakeHead.moveMe(initX, initY);
  i++;
  setTimeout(
    function(){
      reWait(i)
    }, 100
  )
  console.log(` Pos x ${initX} Pos y ${initY}`)
}

function move()
{
  switch(keyPress)
  {
  case "ArrowUp":
    speedY = -10;
    speedX = 0;
    break
  case "ArrowDown":
    speedY = 10;
    speedX = 0;
    break
  case "ArrowLeft":
    speedY = 0;
    speedX = -10;
    break
  case "ArrowRight":
    speedY = 0;
    speedX = 10;
    break
  default:
    break
}  
  initX += speedX;
  initY += speedY;
}

//MAIN
let initX = 0;
let initY = 0;

var speedY = 10;
var speedX = 0;

let keyPress;

let container = $(".container")
let xInit = 50;
let yInit = 50;

let snakeParts = [];
let snakeHead = new snakeBody(initX, initY);
let firstButton = new Button();

reWait(0);

$(document).on("keydown", logKey);

console.log(`Initial pos is (${snakeHead.xInit}, ${snakeHead.yInit}, ${snakeHead.height})`)