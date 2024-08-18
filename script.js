//Variables buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector(".resetBtn");

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for set interval and timerstatus

let timeInterval = null;
let timerstatus = "stopped";

//Stop watch function
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  // leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
  // leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
  // leadingHours = hours < 10 ? "0" + hours : hours;

  // document.getElementById(
  //   "timer"
  // ).innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;

  let displayTimer = (document.getElementById(
    "timer"
  ).innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`);
}

// window.setInterval(stopWatch, 1);

startStopBtn.addEventListener("click", function () {
  if (timerstatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;

    timerstatus = "started";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerstatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  timerstatus = "stopped";
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});
