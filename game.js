var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);
})

function nextSequence() {
    level++;
    $("#level-title").text("Level"+level);

    var randomNumber = Math.floor(Math.random()* 4);
    var randomChosenColor = buttonColors[randomNumber];

    //input data to gamePattern Array
    gamePattern.push(randomChosenColor);

    //flash
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name) {
    //audio
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}
