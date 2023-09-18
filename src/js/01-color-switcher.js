const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
// робимо кнопку Stop не активною;
btnStop.setAttribute("disabled", "disabled");


btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

let intervalId = 0;

function onStartClick() {
    intervalId = setInterval(changeBodyColor, 1000);

    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute("disabled", "disabled");
 }

function onStopClick() {
    clearInterval(intervalId);
    btnStart.removeAttribute("disabled", "disabled");
    btnStop.setAttribute("disabled", "disabled");
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBodyColor() {
    body.style.backgroundColor = getRandomHexColor();
 }


