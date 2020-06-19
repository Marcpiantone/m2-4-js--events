//Get the CSS to work with index.html

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


// Grab the correct(s) element(s) from index.html in consts

const main = document.getElementById('main');


// Let's make variables for the number of buttons

let numButtons = 20 ;


// Create the elements to add and append them in main

for(i=1;i<=numButtons;i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `button ${i}`;
    main.appendChild(button);
}

// // Make a function to turn buttons green

    const makeGreen = function(event) {
        const buttonId = envent.target.id; 
        document.button.style.backgroundColor = "green"; //ASK TC
    }



    //Listener for the actions we target

    document.addEventListener('click', makeGreen);