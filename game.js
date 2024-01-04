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

    checkAnswers(userClickedPattern.length-1);
})

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level "+level);

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
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswers(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success!");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("Wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver() {
    started = false;
    gamePattern = [];
    level = 0;
}