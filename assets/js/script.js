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

//Reactivates hover functions//
function reanimate(){
  animationCursor = 1;
}

function turn(){
  /*gameOn is deactivated here to prevent the user from being able to click the colours as they appear. animationCursor is also deactivated*/
  gameOn = 0;
  document.getElementById("gameStatus").innerHTML = "SIMONS TURN...";
  animationCursor = 0;
  delay = 1000;
  //resets colors to prevent animation errors//
  document.getElementById("blue").style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 255 + ')';
  document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ')';
  document.getElementById("green").style.backgroundColor = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
  document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 0 + ')';
/*The below "for" function is to activate the light up animation of the computer. 
It functions by taking the arrays numbers (0 - 3) and assigning a certain colour 
to each using "if" functions. The "timeOut" function of javascript will execute code 
after without a delay so the times of the animation changing to a brighter colour then 
back is offset slightly (250 and 500 respectively). The "delay" variable also increases
with each turn due to this javascript idiosyncrasy, as there were previously problems
with all animations happening instantaneously.*/
  for(let i = 0; i < array.length; i++){
    let x = array[i];
    let y = array.length - 1;
    setTimeout(function(){
      if(x === 0) {
        setTimeout(function(){
          document.getElementById("green").style.backgroundColor = 'rgb(' + 90 + ',' + 255 + ',' + 90 + ')';
        }, 250);
        setTimeout(function(){
          beep1.play()
        }, 250);
        setTimeout(function(){
          document.getElementById("green").style.backgroundColor = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
        }, 500);
      }
      else{
        if(x === 1) {
          setTimeout(function(){
            document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 90 + ',' + 90 + ')';
          }, 250);
          setTimeout(function(){
          beep2.play()
        }, 250);
          setTimeout(function(){
            document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ')';
          }, 500);
        }
        else{
          if(x === 2) {
            setTimeout(function(){ 
              document.getElementById("blue").style.backgroundColor = 'rgb(' + 90 + ',' + 90 + ',' + 255 + ')';
            }, 250);
            setTimeout(function(){
              beep3.play()
            }, 250);
            setTimeout(function(){ 
              document.getElementById("blue").style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 255 + ')';
            }, 500);
          }
          else{
            setTimeout(function(){
              document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 120 + ')';
            }, 250);
            setTimeout(function(){
              beep4.play()
            }, 250);
            setTimeout(function(){
              document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 0 + ')';
            }, 500);    
          }
        }
      }
    }, delay);
    delay = delay + 1000;
    if(i == y){
        setTimeout(function(){
          reanimate();
          document.getElementById("gameStatus").innerHTML = "PLAYERS TURN";
          gameOn = 1;
        }, delay + 500); /*This part of the code is dedicated to insuring the mouse cursors hovering animation begins to function a set time after the code has cycled through the array*/
      }
  }
}

function clickGreen(){
  if(gameOn == 1){
    counterTurns = counterTurns + 1;
    userArray.push(0);
    setTimeout(function(){
      document.getElementById("green").style.backgroundColor = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
    }, 50);
    beep1.play()
    setTimeout(function(){
      greenLightHover();
    }, 100);
    checker();
  }
}

function clickRed(){
  if(gameOn == 1){
    counterTurns = counterTurns + 1;
    userArray.push(1);
    setTimeout(function(){
      document.getElementById("red").style.backgroundColor = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ')';
    }, 50);
    beep2.play()
    setTimeout(function(){
      redLightHover();
    }, 100);
    checker();
  }
}

function clickBlue(){
  if(gameOn == 1){
    counterTurns = counterTurns + 1;
    userArray.push(2);
    setTimeout(function(){
      document.getElementById("blue").style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 255 + ')';
    }, 50);
    beep3.play()
    setTimeout(function(){
      blueLightHover();
    }, 100);
    checker();
  }
}

function clickYellow(){
  if(gameOn == 1){
    counterTurns = counterTurns + 1;
    userArray.push(3);
    setTimeout(function(){
      document.getElementById("yellow").style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 0 + ')';
    }, 50);
    beep4.play()
    setTimeout(function(){
      yellowLightHover();
    }, 100);
    checker();
  }
}