class snakeTest
{
  constructor(pX, pY)
  {
    this.myPosX = pX;
    this.myPosY = pY;
    this.setPos(pX, pY);
    this.createMe();
  }

  myBody = $("<div>");

  createMe()
  {
    this.myBody.attr("class", "test");
    $(".container").append(this.myBody);    
  }

  setPos(x,y)
  {
    this.myBody.css({
      "top": y,
      "left": x
    });
    this.myPosX = x;
    this.myPosY = y;
    
  }

  removeMe()
  {
    this.myBody.remove()
  }

}