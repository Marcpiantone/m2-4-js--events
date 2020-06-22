// Get styles.css to work with index.html

const stylesheet = document.createElement("link");
stylesheet.href = "styles.css";
stylesheet.rel = "stylesheet";
document.head.appendChild(stylesheet);

//Grab the correct html element to house our new elements

const main = document.getElementById("main");
const time = document.getElementById("timer");

//Make a new div for the counter / grey section

//let counter = document.createElement("p");
//counter.innerText =

//Make a new div for the start button

let startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.id = "start";
main.appendChild(startButton);

//Define new var for number of buttons

let numberButtons = 20;

//Make a loop to create a bunch of buttons

for (i = 1; i <= numberButtons; i++) {
  let button = document.createElement("button");
  button.innerText = i;
  button.id = `button ${i}`;
  main.appendChild(button);

  //Random numbers for top; left; bottom

  let topRandom = Math.round(Math.random() * 70) + 15;
  let leftRandom = Math.round(Math.random() * 85);
  let bottomRandom = Math.round(Math.random() * 85);

  //Styles

  button.style.borderRadius = "50%";
  button.style.height = "50px";
  button.style.width = "50px";
  button.style.border = "none";
  button.style.background = "darkred";
  button.style.color = "white";
  button.style.fontSize = "1.2  em";
  button.style.position = "absolute";
  button.style.top = `${topRandom}%`;
  button.style.left = `${leftRandom}%`;
  button.style.bottom = `${bottomRandom}%`;

  //Toggle color on click

  let toggleColor = function (event) {
    const buttonId = event.target.id;
    if (document.getElementById(buttonId).style.background == "darkred") {
      document.getElementById(buttonId).style.background = "green";
    } else {
      document.getElementById(buttonId).style.background = "darkred";
    }
  };

  //Create a listener for the event on buttons

  button.addEventListener("click", toggleColor);
}

//Create a function to make disappear startButton and start a timer

let countdownStart = function () {
  startButton.style.zIndex = "-1";

  let timer = Math.round(Math.random() * 20);
  let minusOnesec = function () {
    timer -= 1;
    time.innerText = timer;
    if (timer == 0) {
      clearInterval(countdown);
    }
  };

  let countdown = setInterval(minusOnesec, 1000);
};

//Create a rule that enforce "Losing"

//Create a listener for the event on start

startButton.addEventListener("click", countdownStart);
