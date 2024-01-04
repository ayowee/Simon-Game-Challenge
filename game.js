var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random()* 4);
    
    var randomChosenColor = buttonColors[randomNumber];

    //input data to gamePattern Array
    gamePattern.push(randomChosenColor);

    //flash
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //audio
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}



