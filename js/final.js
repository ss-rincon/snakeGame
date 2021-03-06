class snakeTest
{
  constructor()
  {
    this.createMe();
    //this.myPosX = pX;
    //this.myPosY = pY;
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

    $(".container").append(this.myBody);      
  }
}

class Fruit
{
  constructor()
  {
    this.createMe();
    //this.myPosX = pX;
    //this.myPosY = pY;
  }

  myBody = $("<div>");


  createMe()
  {
    this.myBody.attr("class", "fruit");
        
    
  }

  setPos(x,y)
  {
    this.myBody.css({
      "top": y,
      "left": x
    });
    $(".container").append(this.myBody);
    this.xx = x;
    this.yy = y;
  }

}




let speedX = 0;
let speedY = 10;
let firstX = 50;
let firstY = 50;
let snakes = [new snakeTest()];
let path = [[firstX, firstY]];
let lafruit = new Fruit();
lafruit.setPos(80, 80)

function checkFruit()
{
  
  if(lafruit.xx == firstX && lafruit.yy == firstY)
  {
    snakes.push(new snakeTest());
    lafruit.setPos(170, 140)
  }
}


function addPath()
{
  path.unshift([firstX, firstY])
  if(path.length > snakes.length)
  {
    path.pop()
  }
}

function main()
{
  setSpeed();
  addPath();
  checkFruit();
  console.log(path);
  for (let elem of snakes)
  {elem.setPos(firstX,firstY)}
  setTimeout(main, 500)
}


function checkSpeed(e)
{
  if (e!=null)
  {
  var key = e.code
  console.log(key)
  }

  switch(key)
  {
    case "ArrowUp":
      if(speedX == -10 || speedX == 10)
      {
        speedX = 0;
        speedY = -10;
      }
    break

    case "ArrowDown":
      if(speedX == -10 || speedX == 10)
      {
        speedX = 0;
        speedY = 10;
      }
    break

    case "ArrowRight":
      if(speedY == -10 || speedY == 10)
      {
        speedX = 10;
        speedY = 0;
      }
    break

    case "ArrowLeft":
      if(speedY == -10 || speedY == 10)
      {
        speedX = -10;
        speedY = 0;
      }
    break


       
  }  
  
}

function setSpeed()
{
  firstX += speedX;
  firstY += speedY;
}



$(document).on("keydown", checkSpeed)
main();



