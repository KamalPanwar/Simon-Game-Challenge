var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
 var userClickedPattern = [];
$("div").click(function (e) {
  var userChosenColour = this.id;
  
  if (userChosenColour != "") {
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
  }
  playSound(userChosenColour)
}

);

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
    playSound(randomChosenColour)
}
function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
      audio.play();
}
console.log(nextSequence());
