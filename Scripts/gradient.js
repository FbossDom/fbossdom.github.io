var Developer = document.getElementsByClassName("developer");
var MyName = document.getElementById("Name");
var MyTitle = document.getElementById("FrontendDev");
var backGround = document.getElementById("backGround");
var percent = 0; //staringPosInitial
var animationStep = 0.5;    //How much should a percentage move per frame
var offscreenmultilpier = 15; //How much faster the animation should go if the percentage is <0 or >100
var postitiveLength = 200; //What percentage until it changes
var negativeLength = -600; //What percentage it should start off each call
var miliseconds = 50; //How often should a frame be called
var firstColor;
var secondColor;

loadGradiantJS();

function loadGradiantJS(){
    console.log("Gradient.JS was loaded succesfully.");
    randomColorMaker();
    gradientAnimatorInterval = setInterval(function() {
        gradientAnimation(firstColor, secondColor, percent);
        }, miliseconds);
}

function randomColorMaker(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    var randomColor = "rgb(" + red.toString() + "," + blue.toString() + "," + green.toString() + ")";
    console.log("New Color was made :" + randomColor);

    var complementary = "rgb(" + Math.abs(red-255).toString() + "," + Math.abs(blue-255).toString() + "," + Math.abs(green-255).toString() + ")";

    console.log("New Complementary color was made :" + complementary);

    firstColor = randomColor;
    secondColor = complementary;
}
function randomRGB(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    var randomColor = "rgb(" + red.toString() + "," + blue.toString() + "," + green.toString() + ")";
    console.log("New Color was made :" + randomColor);
    return randomColor;
}

function gradientAnimation(){
    //console.log("Gradient animation started");
    var gradient = "linear-gradient(25deg," + firstColor + percent + "%, " + secondColor + "100%)";
    
    backGround.style.background = gradient;
    MyName.style.backgroundImage = gradient;
    MyTitle.style.backgroundImage = gradient;
    //console.log(getComputedStyle(backGround).getPropertyValue('background'));

    if(percent == postitiveLength || percent > postitiveLength){
        console.log("Gradient animation finished.");

        secondColor = firstColor;
        firstColor = randomRGB();

        percent = negativeLength;
        console.log("Percentage is reset.");
    }else{
        if(percent < -50 || percent > 100){
            percent = percent + (animationStep * offscreenmultilpier);  
        }else{
            percent = percent + animationStep;
        }
        console.log("percent = " + percent);
    }
}


    