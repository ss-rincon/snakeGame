class snakeTest
{
  constructor(myClass)
  {
    this.myClass = myClass;
    this.createMe();

  }
  myBody = $("<div>");
  createMe()
  {
    this.myBody.attr("class", this.myClass);    
  }

  setPos(x,y)
  {
    this.myBody.css({
      "top": y,
      "left": x
    });
    this.xx = x;
    this.yy = y;
    $(".container").append(this.myBody);      
  }
}





let speedX = 0;
let speedY = 10;
let firstX = 50;
let firstY = 50;
let key = null;
let snakes = [new snakeTest("test")];
let path = [[firstX, firstY]];
let fruit = new snakeTest("fruit");
fruit.setPos(80, 80);

function endGame()
{

  for(let elem of path.slice(1, path.length+1))
  {
    if(elem[0] == firstX && elem[1] == firstY)
    {
      return true
    }
  }
  return (firstX >= 200 || firstY >= 200 || firstX < 0 || firstY < 0)

}

function checkFruit()
{
  
  if(fruit.xx == firstX && fruit.yy == firstY)
  {
    snakes.push(new snakeTest("test"));
    let randomX = Math.floor(Math.random() * 20)*10;
    let randomY = Math.floor(Math.random() * 20)*10;

    for (let elem of path)
    {
      if(elem[0] == randomX && elem[1] == randomY)
      {
        checkFruit()
      }
    }
    fruit.setPos(randomX, randomY)
  }
}

function addPath()
{
  path.unshift([firstX, firstY])
  if(path.length > snakes.length)
  {
    path.pop()
  }
  console.log(path)
  
  

}

function main()
{

  setSpeed();
  checkFruit();
  changeDir();
  changeDir();
  addPath();
  endGame();
  
  for (let elem of snakes)
  {elem.setPos(path[snakes.indexOf(elem)][0], path[snakes.indexOf(elem)][1])}
  if(endGame()!=true)  
  {
  setTimeout(main, 100)
  }
  else
  {
    console.log("game over")
  } 
}


function checkSpeed(e)
{
  if (e!=null)
  {
  key = e.code
  console.log(key)
  }
}

function changeDir()
{
  if(speedX == 10 || speedX == -10)
  {
    if(key=="ArrowUp")
    {
      speedX = 0;
      speedY = -10;
    }
    else if(key=="ArrowDown")
    {
      speedX = 0;
      speedY = 10;
    }
  }

  if(speedY == 10 || speedY == -10)
  {
    if(key=="ArrowLeft")
    {
      speedY = 0;
      speedX = -10;
    }
    else if(key=="ArrowRight")
    {
      speedY = 0;
      speedX = 10;
    }
  } 
}

function setSpeed()
{
  firstX += speedX;
  firstY += speedY;
}

$(document).on("keydown", checkSpeed)
main();



