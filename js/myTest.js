mainLoop(50);
$(document).ready(function(){
  })

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/*async function start(){

  for(let i = 0; i < 5; i++){
    await wait(500);
    let headTop = parseInt($("#head").css("top"));
    $("#head").css("top", headTop + 10);
  }

}*/


function reWait(i)
{
  move();
  i++;
  setTimeout(
    function(){
      reWait(i)
    }, 1000
  )
  console.log(`I've waited ${i} secs`)
}

function move()
{
  while (True)
  {
    let headTop = parseInt($("#head").css("top"));
    $("#head").css("top", headTop + 10);
  }

}

reWait(0);






function mainLoop(x) {
  let headTop = parseInt($("#head").css("top"));
  console.log(headTop);
  $("#head").on("click", function(){
    $(this).css("background-color", "green");
    $(this).css("top", (headTop + x))
    
  })
  headTop = headTop + x;
}