// Exercise 1.2
// ------------
console.log('exercise 1.2');


// Get css to work in the HTML

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


// Make const to grab the element(s) to edit #result and #time

const result = document.querySelector('#result');
const time = document.querySelector('#time');

//Make another const to check if user has won already

let userWon = false;

// Function that is triggered on click (edits html to add "You Win")

const runGame = function(){
    result.innerText = 'YOU WON THIS ONE!';
    userWon = true;
}

// Let's use a RANDOM time out to display You Lose this time

const timer = Math.round(Math.random()*10);
let countdowntimer = timer;
//time.innerText = `${timer}`;
let timerParam = timer*1000;

let actualizeTimer = function() {
    countdowntimer -= 1 ;
    time.innerText = countdowntimer ;
    if(countdowntimer == 0) {
        clearInterval(countdown);
    }
}

let countdown = setInterval(actualizeTimer, 1000);

// And let's make this timer to show up on screen AND a time out

const lostGame = function(){
    if(userWon === false) {
        result.innerText = 'YOU LOSER!';
        document.removeEventListener('click', runGame);
    }
}

setTimeout(lostGame, timerParam);


// Listener that traps any click on page

document.addEventListener('click', runGame);