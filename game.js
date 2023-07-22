
var buttonColours=[ "red", "blue", "green", "yellow"]
var gamePattern=[]
userClickedPattern=[]
$('div').click(function(e){
    userChosenColour= this.id;
    var audio = new Audio(`./sounds/${userChosenColour}.mp3`);
    audio.play();
    
    if(userChosenColour!=''){
     userClickedPattern.push(userChosenColour)
     console.log(userClickedPattern);
    }
    
    
 })
  
function nextSequence() {
    var randomNumber= Math.round(Math.random() * (3 - 0) + 0);
   var randomChosenColour= buttonColours[randomNumber]
   var userChosenColour
   gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeOut(10).fadeIn(100).click(function(){
        var audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
        audio.play();
    })
     
function playSound
         
        
    
   
}
console.log(nextSequence())


