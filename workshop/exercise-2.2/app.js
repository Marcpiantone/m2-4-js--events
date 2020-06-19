//Get CSS to work with indiex.html

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


//Grab the html element we're gonna use to parent the buttons

//const main = document.querySelector('#main');

    //OR
const main = document.getElementById('main')

//Let's have a variable for the number of buttons

let numberButtons = 20;

//Create the elements we need (buttons)

for(i=1;i<=numberButtons;i++){
//we need, for every button :
// an id = i ; an innerText =
    let button = document.createElement('button');
    button.innerText = i;
    button.id = `button ${i}`;
    button.style.background = 'darkred';
    main.appendChild(button);
}


//Create a function that is triggered on event click

let changeColor = function(event){
    const buttonId = event.target.id;
    if(document.getElementById(buttonId).style.background == 'darkred'){
        document.getElementById(buttonId).style.background = 'green';
    }
    else {
        document.getElementById(buttonId).style.background = 'darkred';
    }


}


//Create a listener for the event

document.addEventListener('click',changeColor)
