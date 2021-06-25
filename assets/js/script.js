let array = [];
let userArray = [];
let counter = 0;
let counterTurns = 0;
let counterHighScore = 0;
let gameOn = 0;
/*Prevents potential problems 
with array activation before game starts*/
let animationCursor = 1;
let delay = 1000;
let gameSpeed = 2;
let speedIncrease = 1000;
let lightUpDelay = 250;
let lightUpDelayOffset = 500;
let scoreTurnChecker = 0;
let soundActivation = 1;
const beep1 = new Audio('../assets/audio/beep1.mp3');
const beep2 = new Audio('../assets/audio/beep2.mp3');
const beep3 = new Audio('../assets/audio/beep3.mp3');
const beep4 = new Audio('../assets/audio/beep4.mp3');

function speedChangeHoverInOne() {
    document.getElementsByClassName("speedButton")[0].style.textDecoration = "underline";
}

function speedChangeHoverOutOne() {
    if (gameSpeed != 1) {
        document.getElementsByClassName("speedButton")[0].style.textDecoration = "none";
    }
}

function speedChangeHoverInTwo() {
    document.getElementsByClassName("speedButton")[1].style.textDecoration = "underline";
}

function speedChangeHoverOutTwo() {
    if (gameSpeed != 2) {
        document.getElementsByClassName("speedButton")[1].style.textDecoration = "none";
    }
}

function speedChangeHoverInThree() {
    document.getElementsByClassName("speedButton")[2].style.textDecoration = "underline";
}

function speedChangeHoverOutThree() {
    if (gameSpeed != 3) {
        document.getElementsByClassName("speedButton")[2].style.textDecoration = "none";
    }
}

function refreshHoverLightIn() {
    if (animationCursor == 1 && gameOn == 1) {
        document.getElementsByClassName("fas fa-sync-alt")[0].style.color =
            `rgb(${204}, ${0}, ${0})`;
    }
}

function refreshHoverLightOut() {
    if (animationCursor == 1 && gameOn == 1) {
        document.getElementsByClassName("fas fa-sync-alt")[0].style.color =
            `rgb(${13}, ${13}, ${13})`;
    }
}

function volUpHoverLightIn() {
    document.getElementsByClassName("fas fa-volume-up")[0].style.color =
        `rgb(${204}, ${0}, ${0})`;
}

function volUpHoverLightOut() {
    document.getElementsByClassName("fas fa-volume-up")[0].style.color =
        `rgb(${13}, ${13}, ${13})`;
}

function volDownHoverLightIn() {
    document.getElementsByClassName("fas fa-volume-mute")[0].style.color =
        `rgb(${204}, ${0}, ${0})`;
}

function volDownHoverLightOut() {
    document.getElementsByClassName("fas fa-volume-mute")[0].style.color =
        `rgb(${13}, ${13}, ${13})`;
}

function soundOn() {
    soundActivation = 1;
    document.getElementById("soundactivate").style.visibility = "visible";
    document.getElementById("sounddeactivate").style.visibility = "hidden";
}

function soundOff() {
    soundActivation = 0;
    document.getElementById("soundactivate").style.visibility = "hidden";
    document.getElementById("sounddeactivate").style.visibility = "visible";
}

function colourDefault() {
    redDefault();
    yellowDefault();
    blueDefault();
    greenDefault();
}

function redDefault() {
    document.getElementById("red").style.backgroundColor =
        `rgb(${204}, ${0}, ${0})`;
}

function redLit() {
    document.getElementById("red").style.backgroundColor =
        `rgb(${255}, ${128}, ${128})`;
}

function blueDefault() {
    document.getElementById("blue").style.backgroundColor =
        `rgb(${0}, ${0}, ${204})`;
}

function blueLit() {
    document.getElementById("blue").style.backgroundColor =
        `rgb(${128}, ${128}, ${255})`;
}

function greenDefault() {
    document.getElementById("green").style.backgroundColor =
        `rgb(${0}, ${204}, ${0})`;
}

function greenLit() {
    document.getElementById("green").style.backgroundColor =
        `rgb(${128}, ${255}, ${128})`;
}

function yellowDefault() {
    document.getElementById("yellow").style.backgroundColor =
        `rgb(${204}, ${204}, ${0})`;
}

function yellowLit() {
    document.getElementById("yellow").style.backgroundColor =
        `rgb(${255}, ${255}, ${128})`;
}

function resetLarge() {
    reset();
    startGame();
    document.getElementById("resetButtonLarge").style.visibility = "hidden";
}

function gameSpeedOne() {
    gameSpeed = 1;
    document.getElementById("speedSlow").style.textDecoration = "underline";
    document.getElementById("speedMedium").style.textDecoration = "none";
    document.getElementById("speedFast").style.textDecoration = "none";
}

function gameSpeedTwo() {
    gameSpeed = 2;
    document.getElementById("speedMedium").style.textDecoration = "underline";
    document.getElementById("speedFast").style.textDecoration = "none";
    document.getElementById("speedSlow").style.textDecoration = "none";
}

function gameSpeedThree() {
    gameSpeed = 3;
    document.getElementById("speedFast").style.textDecoration = "underline";
    document.getElementById("speedMedium").style.textDecoration = "none";
    document.getElementById("speedSlow").style.textDecoration = "none";
}

/*The following functions replicate the "hover" function from css. 
They are done in javascript as once the color is changed through javascript, 
the css functions cease functioning */
function redLightHover() {
    if (animationCursor == 1) {
        redLit();
    }
}

function redLightLeave() {
    if (animationCursor == 1) {
        redDefault();
    }
}

function yellowLightHover() {
    if (animationCursor == 1) {
        yellowLit();
    }
}

function yellowLightLeave() {
    if (animationCursor == 1) {
        yellowDefault();
    }
}

function greenLightHover() {
    if (animationCursor == 1) {
        greenLit();
    }
}

function greenLightLeave() {
    if (animationCursor == 1) {
        greenDefault();
    }
}

function blueLightHover() {
    if (animationCursor == 1) {
        blueLit();
    }
}

function blueLightLeave() {
    if (animationCursor == 1) {
        blueDefault();
    }
}

//Reactivates hover functions//
function reanimate() {
    animationCursor = 1;
}

function turn() {
    /*gameOn is deactivated here to prevent the user from being 
    able to click the colours as they appear. animationCursor is also deactivated*/
    document.getElementsByClassName("fas fa-sync-alt")[0].style.color =
        `rgb(${128}, ${128}, ${128})`;
    gameOn = 0;
    scoreTurnChecker = 0;
    document.getElementById("gameStatus").innerHTML = "SIMONS TURN...";
    document.getElementById("gameStatusLarge").innerHTML = "Thinking...";
    animationCursor = 0;
    delay = 1000;
    //resets colors to prevent animation errors//
    colourDefault();
    if (gameSpeed == 1) {
        delay = 1000;
        speedIncrease = 1000;
        lightUpDelay = 250;
        lightUpDelayOffset = 500;
    } else {
        if (gameSpeed == 2) {
            delay = 800;
            speedIncrease = 800;
            lightUpDelay = 200;
            lightUpDelayOffset = 400;
        } else {
            delay = 600;
            speedIncrease = 600;
            lightUpDelay = 150;
            lightUpDelayOffset = 300;
        }
    }
    /*The below "for" function is to activate the light up animation of the computer. 
    It functions by taking the arrays numbers (0 - 3) and assigning a certain colour 
    to each using "if" functions. The "timeOut" function of javascript will execute code 
    after without a delay so the times of the animation changing to a brighter colour then 
    back is offset slightly (250 and 500 respectively). The "delay" variable also increases
    with each turn due to this javascript idiosyncrasy, as there were previously problems
    with all animations happening instantaneously.*/
    for (let i = 0; i < array.length; i++) {
        let x = array[i];
        let y = array.length - 1;
        setTimeout(function() {
            if (x === 0) {
                setTimeout(function() {
                    greenLit();
                }, lightUpDelay);
                setTimeout(function() {
                    if (soundActivation == 1) {
                        beep1.play();
                    }
                }, lightUpDelay);
                setTimeout(function() {
                    greenDefault();
                }, lightUpDelayOffset);
            } else {
                if (x === 1) {
                    setTimeout(function() {
                        redLit();
                    }, lightUpDelay);
                    setTimeout(function() {
                        if (soundActivation == 1) {
                            beep2.play();
                        }
                    }, lightUpDelay);
                    setTimeout(function() {
                        redDefault();
                    }, lightUpDelayOffset);
                } else {
                    if (x === 2) {
                        setTimeout(function() {
                            blueLit();
                        }, lightUpDelay);
                        setTimeout(function() {
                            if (soundActivation == 1) {
                                beep3.play();
                            }
                        }, lightUpDelay);
                        setTimeout(function() {
                            blueDefault();
                        }, lightUpDelayOffset);
                    } else {
                        setTimeout(function() {
                            yellowLit();
                        }, lightUpDelay);
                        setTimeout(function() {
                            if (soundActivation == 1) {
                                beep4.play();
                            }
                        }, lightUpDelay);
                        setTimeout(function() {
                            yellowDefault();
                        }, lightUpDelayOffset);
                    }
                }
            }
        }, delay);
        delay = (delay + speedIncrease);
        if (i == y) {
            setTimeout(function() {
                reanimate();
                document.getElementById("gameStatus").innerHTML = "PLAYERS TURN";
                document.getElementById("gameStatusLarge").innerHTML = "GO!";
                document.getElementsByClassName("fas fa-sync-alt")[0].style.color =
                    `rgb(${13}, ${13}, ${13})`;
                gameOn = 1;
            }, delay + lightUpDelayOffset);
            /*This part of the code is dedicated to insuring 
                   the mouse cursors hovering animation begins to function a set time 
                   after the code has cycled through the array*/
        }
    }
}

function clickGreen() {
    if (gameOn == 1) {
        counterTurns = counterTurns + 1;
        userArray.push(0);
        setTimeout(function() {
            greenDefault();
        }, 25);
        if (soundActivation == 1 && animationCursor == 1) {
            beep1.play();
        }
        setTimeout(function() {
            greenLightHover();
        }, 50);
        checker();
    }
}

function clickRed() {
    if (gameOn == 1) {
        counterTurns = counterTurns + 1;
        userArray.push(1);
        setTimeout(function() {
            redDefault();
        }, 25);
        if (soundActivation == 1 && animationCursor == 1) {
            beep2.play();
        }
        setTimeout(function() {
            redLightHover();
        }, 50);
        checker();
    }
}

function clickBlue() {
    if (gameOn == 1) {
        counterTurns = counterTurns + 1;
        userArray.push(2);
        setTimeout(function() {
            blueDefault();
        }, 25);
        if (soundActivation == 1 && animationCursor == 1) {
            beep3.play();
        }
        setTimeout(function() {
            blueLightHover();
        }, 50);
        checker();
    }
}

function clickYellow() {
    if (gameOn == 1) {
        counterTurns = counterTurns + 1;
        userArray.push(3);
        setTimeout(function() {
            yellowDefault();
        }, 25);
        if (soundActivation == 1 && animationCursor == 1) {
            beep4.play();
        }
        setTimeout(function() {
            yellowLightHover();
        }, 50);
        checker();
    }
}


//Reset button to allow players the option to restart the game on their turn//
function reset() {
    if (gameOn == 1) {
        array = [];
        userArray = [];
        document.getElementById("currentscore").innerHTML = 0;
        gameOn = 0;
        document.getElementById("gameStatus").style.visibility = "hidden";
        document.getElementById("gameStatusLarge").style.visibility = "hidden";
        document.getElementById("startButton").style.visibility = "visible";
        document.getElementById("startButton").innerHTML = "Play Simon!";
        document.getElementById("largePlayButton").style.visibility = "visible";
        document.getElementById("gameStatusLargeCircle").style.visibility = "hidden";
        document.getElementById("mobileGameOver").style.visibility = "hidden";
        document.getElementById("resetButtonLarge").style.color = "transparent";
        document.getElementsByClassName("fas fa-sync-alt")[0].style.color =
            `rgb(${128}, ${128}, ${128})`;
        colourDefault();
    }
}

/*Starts the game and generates the first randomised number of the array. 
This corresponds with one of the onscreen colours. The animation of the 
mouse hovering over each section is also disabled here, as it could be 
intrusive towards the playing experience and prove confusing.*/
function startGame() {
    animationCursor = 0;
    document.getElementById("resetButtonLarge").style.color =
        `rgb(${248}, ${248}, ${255})`;
    array.push(Math.floor(Math.random() * 4));
    turn();
    document.getElementById("currentscore").innerHTML = 0;
    document.getElementById("gameStatus").style.visibility = "visible";
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("largePlayButton").style.visibility = "hidden";
    document.getElementById("gameStatusLarge").style.visibility = "visible";
    document.getElementById("gameStatusLargeCircle").style.visibility = "visible";
    document.getElementById("mobileGameOver").style.visibility = "hidden";
}

function checker() {
    /*The below if and else are to add the ability for the code
    to stop the game if the player selects wrong in the middle of
    a turn. This removes the need to click randomly a few times
    just to restart the game and also creates a smoother gameplay
    experience*/
    if (array[scoreTurnChecker] == userArray[scoreTurnChecker]) {
        scoreTurnChecker = scoreTurnChecker + 1;
    } else {
        array = [];
        userArray = [];
        scoreTurnChecker = 0;
        document.getElementById("currentscore").innerHTML = 0;
        gameOn = 0;
        document.getElementById("gameStatus").style.visibility = "hidden";
        document.getElementById("gameStatusLarge").innerHTML = "Game Over";
        document.getElementById("startButton").style.visibility = "visible";
        document.getElementById("startButton").innerHTML = "Play Again";
        document.getElementById("mobileGameOver").style.visibility = "visible";
        colourDefault();
        setTimeout(function() {
            document.getElementById("gameStatusLarge").style.visibility = "hidden";
            document.getElementById("resetButtonLarge").style.visibility = "visible";
        }, 2000);


    }
    if (userArray.length == array.length) {
        gameOn = 0;
        animationCursor = 0;
        for (let i = 0; i < counterTurns;) {
            if (array[i] == userArray[i]) {
                i++;
            } else {
                array = [];
                userArray = [];
                document.getElementById("currentscore").innerHTML = 0;
                gameOn = 0;
                document.getElementById("gameStatus").innerHTML = "GAME OVER";
                document.getElementById("gameStatusLarge").innerHTML = "Game Over";
                document.getElementById("startButton").style.visibility = "visible";
                document.getElementById("startButton").innerHTML = "Play Again";
                colourDefault();
                setTimeout(function() {
                    document.getElementById("gameStatusLarge").style.visibility = "hidden";
                    document.getElementById("resetButtonLarge").style.visibility = "visible";
                }, 2000);
                document.getElementById("mobileGameOver").style.visibility = "visible";

                break;
            }
            gameOn = 1;
        } //The check below is to prevent premature activation if player loses//
        if (array.length > 0) {
            if (gameOn == 1) {
                array.push(Math.floor(Math.random() * 4));
                userArray = [];
                scoreCounter();
                highScore();
                counter = 0;
                turn();
            }
        }

    }
}

/*This tracks the current user score and resets when the game is restarted*/
function scoreCounter() {
    document.getElementById("currentscore").innerHTML = (array.length - 1);
    counter = document.getElementById("currentscore").innerHTML = (array.length - 1);
}
/*This function is designed to check that if the user input 
reaches a new record number, that it will record this new 
number and leave it on the page visible to the user*/
function highScore() {
    if (array.length > counterHighScore) {
        document.getElementById("highscore").innerHTML = array.length - 1;
        counterHighScore = array.length;
    }
}