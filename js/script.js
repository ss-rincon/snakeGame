 
class snakeBody {
  constructor(xInit, yInit)
  {
    this.xInit = xInit;
    this.yInit = yInit;
  }
}

let snakeHead = new snakeBody(200, 200);
let snakeLenght = [snakeHead];

console.log(`Initial pos is (${snakeHead.xInit}, ${snakeHead.yInit})`)

if(snakeLenght.length >= 1)
{
  let body = $("<div></div>").css({
    "background-color":"black",
    "height":"10px",
    "width":"10px",
    "position":"absolute",
    "top":"50px",
    "left":"30px"
  })
  snakeLenght.push(body);
  $(".container").append(body)
}

 
 