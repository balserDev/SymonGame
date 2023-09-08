var Ongame = false;

$(document).keypress(function(event){
  if(event.key == "a" && Ongame == false){ 
     Ongame = true;
     var gamePicks = [];
     var Palyerpicks = [];
     var Level = 0;
     var count = 0;

     Rerun(gamePicks);
    
   // Game logic when clicking a button
    $(".box").click(function(){
      Animate(this);  
      var selection = $(this).attr("id");
      Palyerpicks.push(selection);
      
      console.log("Player Selection: " + Palyerpicks + " Game Selections: " + gamePicks);
      if (selection == gamePicks[count]){
        count++;
        if (Palyerpicks.length == gamePicks.length){
          Rerun(gamePicks);
        }
      }
      else{
        YouFailed();
      }
    })
  }else{
    event.preventDefault();
    return false;
  }

// Animates the button 
function Animate(item){
  var itemID = $(item).attr("id");
  switch (itemID){
    case "1":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "2":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "3":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    case "4":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
  }
  $(item).addClass("Higlight");
  setTimeout(function(){
  $(item).removeClass("Higlight");
  }, 150)
}

// Re set stats and starts a new level 
function Rerun(array){
  var pick =  Math.floor(Math.random()*4) + 1
  array.push(pick);
  setTimeout(function(){
    Animate($("#" + pick));
  }, 1000)
  
  Level++;
  Palyerpicks = [];
  $("h1").text("Level " + Level);
  console.log("Cheat: " +  pick);
  count = 0;
}
})

function YouFailed(){

  var youFaildSound = new Audio("sounds/wrong.mp3");
  youFaildSound.play();

  $("h1").text("You Failed");
  $("body").css("background-color", "red")

  setTimeout(function(){
    location.reload();
  }, 1000)
  
}