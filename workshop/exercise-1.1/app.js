// Exercise 1.1
// ------------
console.log('exercise 1.1');

// Get css to work in the HTML

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


// Make a const to grab the element to edit

const result = document.querySelector('#result');


//Make another const to check if user has won already

let userWon = false;


// Function that is triggered on click

const runGame = function(){
    result.innerText = 'You Win!';
    userWon = true;
}


// Let's use a time out to display You Lose

const loseGame = function(){
    if(userWon === false) {
        result.innerText = 'You Lose!';
        document.removeEventListener('click', runGame);
    }
}

setTimeout(loseGame, 1000);


// Listener that traps any click on page

document.addEventListener('click', runGame)