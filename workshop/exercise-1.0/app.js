// Exercise 1.0
// ------------
console.log('exercise-1');

// Make a constant that grabs the main in index.html

const main = document.querySelector('#main');


// Write some function that edits the main

const addMain = function(event){
    main.innerText = 'You win!';
    document.removeEventListener('click', addMain);
}

// Here we make the listener (any click on the page) that triggers addMain

document.addEventListener('click', addMain);

//NOT BAD :D 