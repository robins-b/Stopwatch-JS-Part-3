let display = document.querySelector(".display");

let num = 0;
let interval = false;

function time() {
  num++;
  let hours = Math.floor(num / 3600);
  let minutes = Math.floor((num - hours * 3600) / 60);
  let seconds = num % 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  interval = setInterval(time, 1000);
}

function stop() {
  clearInterval(interval);
  interval = false;
}

function reset() {
  stop();
  num = 0;
  display.textContent = "00:00:00";
}
