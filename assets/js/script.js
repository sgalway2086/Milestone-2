let array = [];
let userArray = [];
let counter = 0;
let counterTurns = 0;
let counterHighScore = 0;
let gameOn = 0; /*Prevents potential problems with array activation before game starts*/
let animationCursor = 1;
let delay = 1000;
const beep1 = new Audio('../assets/audio/beep1.mp3');
const beep2 = new Audio('../assets/audio/beep2.mp3');
const beep3 = new Audio('../assets/audio/beep3.mp3');
const beep4 = new Audio('../assets/audio/beep4.mp3');

/*The following functions replicate the "hover" function from css, They are done in javascript as once the color is changed through javascript, the css functions cease functioning */
function redLightHover(){
  if(animationCursor == 1){
    document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 90 + ',' + 90 + ')';
  }
}

function redLightLeave(){
  if(animationCursor == 1){
    document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ')';
  }
}

function yellowLightHover(){
  if(animationCursor == 1){
    document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 90 + ')';
  }
}
function yellowLightLeave(){
  if(animationCursor == 1){
    document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 0 + ')';
  }
}

function greenLightHover(){
  if(animationCursor == 1){
    document.getElementById("green").style.backgroundColor = 'rgb(' + 90 + ',' + 255 + ',' + 90 + ')';
  }
}
function greenLightLeave(){
  if(animationCursor == 1){
    document.getElementById("green").style.backgroundColor = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
  }
}

function blueLightHover(){
  if(animationCursor == 1){
    document.getElementById("blue").style.backgroundColor = 'rgb(' + 90 + ',' + 90 + ',' + 255 + ')';
  }
}

function blueLightLeave(){
  if(animationCursor == 1){
    document.getElementById("blue").style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 255 + ')';
  }
}