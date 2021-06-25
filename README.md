# Milestone-2

# User Experience (UX)
 
## User Stories
 
For a new user who might not know the game

1. It was imperative to be easy to understand and be intuitive
2. The player is to enjoy the game, and want to continue playing
3. Easily able to understand all the other functions related to the game
 
As a returning user
 
1. To be able to start playing the game again quickly
2. The ability to keep the game "fresh" and add new ways to enjoy.

For a site owner

1. To give users a positive introduction to the games hosted on the site
2. Hopefully attracting new users through an easy to understand and simple game
 
For a mobile user

1. Similar to a new and previous user but with need of a game with a clean, 
mobile friendly layout that can be seen on their screen without the need of scrolling

# Design
 
## Fonts
* Oswald from Google Fonts was chosen due to its distinct and rather "game-like" appearence.
The font is clear and readable, making instructions readable to younger or visually impaired users.
## Icons
* Icons will be used to represent options to the player such as a reset button and volume control, 
universal and intuitive symbols.
## Colours
* A deep shade of red and off white will make up the base of the website. These were chosen due to being 
relatively unintrusive or distracting and an overall pleasant colour scheme.
## Styling
* The sites styling will be done in a way as to attract a users eye to the game, keeping it centered on the screen
at all times.

# Wireframes
 
## Index Page

![Desktop Index Page](/documentation/wireframes/desktopwireframe.png "Desktop Index Page")

## Index Page Mobile

![Mobile Index Page](/documentation/wireframes/mobilewireframe.png "Mobile Index Page")

## Game Over Mobile

![Mobile Game Over](/documentation/wireframes/gameovermobilewireframe.png "Mobile Game Over")

# Features

* Use of media queries to resize the screen correctly
* Many options, such as sound and speed, for replayability
* Good tactile feedback for the user as they play the game

# Technology Used

## Google Fonts
* Google Fonts "Oswald" font was used for this project

## FontAwesome
* Varius FontAwesome logos were utilised to create a more clean user interface

## Gitpod
* The version control on Gitpod was used to create commits and version control the project

## Github
* Github was used to store all versions commited from Gitpod

## Github Pages
* Github Pages was used to make the project live

## Balsamiq
* Balsamiq was used to create various wireframes of different sizes of the site

## Favicon.cc
* This site was used to make the favicon

# Testing

## HTML Validation

![Validated HTML](/documentation/validation/HTMLValidated.PNG "Validated HTML")

## CSS Validation

![Validated CSS](/documentation/validation/CSSValidated.PNG "Validated CSS")

## Javascript Validation

![Validated Javascript](/documentation/validation/JSValidated.PNG "Validated Javascript")

## Lighthouse Report

![Lighthouse Report Result](/documentation/validation/Lighthouse.PNG "Lighthouse Report Result")

# Testing User Stories

## New User

* A new user will be presented right away with the instructions for the game, 
meaning it is quick and intuitive to understand exactly how to play.

![Instructions screenshot](/documentation/screenshots/screenshot3.PNG "Instructions screenshot")

* All functions are easy to understand due to the clear, and visible icon usage on the page

![Game screenshot](/documentation/screenshots/screenshot1.PNG "Game screenshot")

## Returning user

* The large play button is visible and can be clicked the second the user arrives, 
ensuring they can start playing right away

* The game has some variety with the different speeds the user can try out for a different 
challenge

![Speeds screenshot](/documentation/screenshots/screenshot4.PNG "Speeds screenshot")

## Site owner

* For a site owner, having the game on display right away is hugely appealing as it 
entices users and gives them something to interact with instantly due to it being present 
from when the site is loaded

## Mobile User

* For a mobile user, it was paramount that the entirity of the game and options were visible on one 
single screen, to prevent needless scrolling and potentially causing frusteration. This is accomplished 
and has a very easy to understand and pleasing layout

![Mobile screenshot](/documentation/screenshots/screenshot2.PNG "Mobile screenshot")

# Further Testing

## Technical Tests

* During the design, and testing process for the javascript, a lot of console.log functions 
were utilised in order to watch what is happening during the code process, and when it functioned 
as needed, these were removed.

* Different screen sizes were tested frequently, with a large range of devices used to test the game, including 
but not limited to: 8 Android phones, 2 Apple Iphones and 3 Windows computers. Multiple browsers, chrome, firefox, 
safari and samsung internet were used throughout the testing process

* With each change made, the mobile and desktop version of the website were tested, to ensure that a change potentially 
made to target one would not negatively affect the other

* The site was tested in many ways, even in ones that might not be in the instinct of a user (for instance, 
clicking the reset button when the "play again" option is more readily visible) in order to ensure that the code 
was sufficiently robust to not run into any potential issue with users acting outside of what is expected. This 
process was thorough, and as many combinations of possible clicks, button presses and screen size changes mid-game 
were used to ensure that there were no potential points of failure within the code.

* Users were asked for feedback, and to give opinions on what could be improved. A few improvements that came of this 
were lowering the pitch of the beeps as the original ones were somewhat unpleasant for some, increasing the contrast 
between the colours and their lit up versions to make them more easy to see and adding in more options to play the game 
at different speeds

* The site was ran through many devices with Chrome Developer Tools, to ensure that the website functioned 
and looked good on as many devices as possible

# Deployment

## Github Pages

The project was deployed to github pages in this way:

1. Step one is to log into github
2. Click Settings at the top of the repository
3. Scroll down towards "Github Pages" on the settings page
4. Underneath "source", going onto the dropdown then clicking on "none" and then "master branch"
5. The page automatically refreshes, then the site link will be present after scrolling

## Forking the repository
Forking the repository creates an alternative copy to edit without altering the original

1. Log into Github and locate the desired repository
2. At the top of the repository, click on "fork"
3. A copy will now be created and located on your github account

## Creating a local copy

1. Log in to Github and locate the repository
2. Under the name of the repository, click "clone or download"
3. To clone with https, select the "clone with HTTPS" option
4. Open Git bash
5. Change the current working directory to the location of the cloned directorys desired created location
6. Type "git clone" then paste the link from step 3.
7. Hit enter, then it will be created

# Bugs Solved

## Javascript bug report

1. A potential user could click on one of the colours before the game began, 
thus causing the game to cease functioning as the userArray was always longer 
than the array length. The gameOn function prevents this bug.


2. The CSS hover function was previously used to do the colour change when the 
mouse hovered over the divs representing the colours. However, this ceased 
to function once the game began, and if a colour was changed within the javascript, 
it would not be changeable by the CSS. This was fixed by employing an onmousein 
and onmouseleave combination to change the colour instead.

3. There were issues with the timing of the “turn” function that cycled through the array. 
One of these was when every function would effectively execute instantaneously. This 
was fixed with the use of a “delay” variable that was increased every loop, and using 
offset “timeOut” functions in order to ensure the code ran at the correct speed.

4. There was an issue when the user finished with their input, the last section they clicked 
would stay “lit”. A simple solution was adding some code to the “turn” function in order to 
reset the colours back to their original shade before the computer began cycling through the animation.

5. The for loop in the turn function was not functioning correctly. Previously, the code would continuously 
activate the code for the yellow quadrant. This was rather problematic for the game as it rendered 
it unplayable and was of high importance to fix. The problem lay with the method in the “if” functions, 
previously stating for example “if array[i] == 1”. Once changed to a set variable to take the value of I, 
written “let x == array[i]”, the functions began to work as anticipated once x was used.

6. During testing it was found that clicking again on the button to start the game caused a bug with the array 
of the computer, adding additional values without the prerequisite of the player having achieved that score, 
in effect leaving an exploit to artificially increase the array length. The solution was rendering the start 
button invisible once the game commenced, for a cleaner appearance and to prevent this exploit and having 
it reappear once the game has ended, with modified text.

7. If the player lost the game, the last colour clicked stayed the last colour it was lit up as, creating a 
somewhat unpleasant appearance. This was solved by adding a small amount of code to the game ending function 
in order to ensure the colours reset.

8. The reset button being activated in the middle of the computer's “turn” was possible. Adding an if function 
to ensure it was the players turn when the reset button was pressed was sufficient to prevent this issue.

9. Attempting to add visual feedback to the clicking on the quadrants proved problematic during testing with 
manually forcing the code to change the colours as they would often remain the colour after the mouse cursor 
left. A solution was referencing the functions used for the mouse hover function and it caused the colours to 
stay “lit” with the cursor present, while still changing after the cursor leaves.

10. A bug was present when adding audio files to the game, in which if one quadrant lit up twice in a row, the beep 
would not play the second time. This was solved by examining the length of the audio files, which had a lot of 
empty space and trimming them, thus solving the problem.

11. When adding the function to add variable speed, there were timing errors present that caused the game to slow 
down after two turns. The problem was using the “delay” variable and adding it to itself, which functioned 
before adding the code to change the delay property. Creating a new variable “speedIncrease” proved to be a 
solution that allowed the code to use this to change the delays value without causing the offset of the delay 
to vary.


12. During the creation of code to check each move of the player in order to get rid of the necessity of matching 
the two array lengths, one random quadrant would light up without any pattern. The reason behind this was the 
mechanism behind what caused the game to increase array and activate the lights, was triggered. A simple if 
function with an “array.length > 0” was sufficient to stop this error.

13. An issue with the sounds being able to be activated occurred when the player lost the game and then clicked the 
quadrants. The solution to this was to add an additional condition to the if statements used to determine if 
the sounds would activate, linking it to the variable that controlled when the hover animation functioned.

14. Restart button from the large screen resolutions became visible on the small screen resolutions when restart 
clicked. The solution was adding CSS to reduce the size and render it transparent to prevent any possibility 
of being activated in the javascript. The font size and border were set to “0px” and “none” respectively to 
achieve this.

15. Due to the issue encountered with hover in CSS not functioning, it was necessary to design these functions in 
javascript for all the menu buttons.

16. When the reset button was added, it was possible to restart after a game over, leading to the two text 
parts being placed on top of one another. This was an issue due to the delay played on the reset buttons 
appearance and the small window of time that one can push reset before it appears. A solution was changing 
the unused text portion to transparent when reset is pressed, then to its original colour once the game started.

## CSS bug report

1. With the media queries, a problem occurred with the “gamewrap” div in which the divs inside were incorrectly 
sized and the small screen version of the site did not work as intended. A solution was to change it from 100vw 
to 100% width and then mobile functionality was improved.

2. The "gamewrap" div would collapse due to only containing elements that floated. "overflow: hidden" was used 
to repair this.

# Credits
## content
* All code written by Stephen Galway

## Media
* Hasbro for the basic design of Simon to use in this project

## Acknowlegements
* My mentor Aaron for providing many valuable insights on improving the website and the various 
testers who offered advice to make the website more user friendly.