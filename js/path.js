class snakeTest
{
  constructor(pX, pY)
  {
    this.createMe();
    this.myPosX = pX;
    this.myPosY = pY;
  }

  myBody = $("<div>");


  createMe()
  {
    this.myBody.attr("class", "test");
    
  }

  setPos(x,y)
  {
    this.myBody.css({
      "top": y,
      "left": x
    });
    this.myPosX = x;
    this.myPosY = y;
    $(".container").append(this.myBody);      
  }

}


function loop(a, b)
{
  let x = a;
  let y = b;


  console.log(pressedKey)

  if(snakes.length>=1)
  {
    snakes[0].setPos(x, y);
    path.unshift([snakes[0].myPosX, snakes[0].myPosY]);
    if(snakes.length < path.length - 1)
    {path.pop()}
    
    for(let elem of snakes)
    {
      elem.setPos(path[snakes.indexOf(elem)][0], path[snakes.indexOf(elem)][1])
    }

    for (let elem of path.slice(1, path.length + 1))
    {
      if( snakes[0].myPosX == elem[0] && snakes[0].myPosY == elem[1])
      {
        alert("Game over");
        snakes = [];
        path = [];
        break
      }
    }
    
  }



  console.log(path);
  console.log(snakes);
  doSomething();
  setTimeout(
    function(){
      loop(x, y)
    }, 100
  )
}

function createSnake()
{
  snakes.unshift(new snakeTest)
}

function checkKey(e)
{
  pressedKey = e.code;
  console.log(e.code);

  


let posX = 0;
let posY = 0;
let path = [];
let snakes = [];
let pressedKey = "ArrowDown";
let velX = 10;
let velY = 0;

$(document).on("click", createSnake)
$(document).on("keydown", checkKey)

console.log("test");
loop(velX, velY);

