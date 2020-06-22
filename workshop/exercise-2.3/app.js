//No css for this one !

//Grab the html element that will parent our new elements (buttons)

const main = document.getElementById("main");

//Define the number of buttons

let numButtons = 20;

//Make style for main

main.style.margin = "30px";
//main.style.width = '100vw';

//Make a loop that for numButtons create a button (including the eventListener)
//This loop must also specify the shape and the position of buttons

for (i = 1; i <= numButtons; i++) {
  let button = document.createElement("button");
  button.innerText = i;
  button.id = `button ${i}`;
  main.appendChild(button);

  //Random numbers for top; left; bottom

  let topRandom = Math.round(Math.random() * 85);
  let leftRandom = Math.round(Math.random() * 85);
  let bottomRandom = Math.round(Math.random() * 85);

  //Styles

  button.style.borderRadius = "50%";
  button.style.height = "100px";
  button.style.width = "100px";
  button.style.border = "none";
  button.style.background = "darkred";
  button.style.color = "white";
  button.style.fontSize = "2em";
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

  //Create a listener for the event
  button.addEventListener("click", toggleColor);
}
