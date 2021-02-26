/* 
class snakeBody 
{
  constructor(xPos, yPos)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.createMe();
  }

  className = "snakeBody";
    
  createMe()
  {
    let myBody = $("<div>")
      .attr(
      "class", this.className)
      .css({
      "top": this.yPos,
      "left": this.xPos
    });
    container.append(myBody);
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
    .attr(
      "type", "submit"
    );
    container.append(myBody);
    myBody.on("click", function(){
      let snake = new snakeBody(xInit, yInit);
      snakeParts.push(snake);
      console.log({snakeParts})
    })
  }
}

let container = $(".container")
let xInit = 50;
let yInit = 50;

let snakeParts = [];

let snakeHead = new snakeBody(xInit, yInit);
let firstButton = new Button();


console.log(`Initial pos is (${snakeHead.xInit}, ${snakeHead.yInit}, ${snakeHead.height})`)
 */