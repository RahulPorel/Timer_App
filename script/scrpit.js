let interval = null;
let remainingSeconds = 0;
let inputNumber = 1;
// selecteors
const minutesTimer = document.querySelector(".timer__part--minutes");
const secondsTimer = document.querySelector(".timer__part--seconds");
const controlTimer = document.querySelector(".timer__btn--control");
const resetTimer = document.querySelector(".timer__btn--reset");

updateTimerInterface();
updateControlsInterface();

// event listners

controlTimer.addEventListener("click", () => {
  if (interval === null) {
    startTimer();
  } else {
    stopTimer();
  }
});

resetTimer.addEventListener("click", () => {
  const inputMinutesFromUser = prompt("Enter number of minutes: ");
  if (inputMinutesFromUser === "") {
    alert("empty input, try again!");
  }
  if (inputMinutesFromUser < 60) {
    stopTimer();
    remainingSeconds = inputMinutesFromUser * 60;
    updateTimerInterface();
    updateControlsInterface();
    startTimer();
  }
});

// function

function updateTimerInterface() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  minutesTimer.textContent = minutes.toString().padStart(2, "0");
  secondsTimer.textContent = seconds.toString().padStart(2, "0");
}
function updateControlsInterface() {
  if (interval === null) {
    controlTimer.innerHTML = `<span class="material-icons">play_arrow</span>`;
    controlTimer.classList.add("timer__btn--start");
    controlTimer.classList.remove("timer__btn--stop");
  } else {
    controlTimer.innerHTML = `<span class="material-icons">pause</span>`;
    controlTimer.classList.add("timer__btn--stop");
    controlTimer.classList.remove("timer__btn--start");
  }
}

function startTimer() {
  if (remainingSeconds === 0) return;
  interval = setInterval(() => {
    remainingSeconds--;
    updateTimerInterface();

    if (remainingSeconds === 0) {
      stopTimer();
    }
    // todo add sound
  }, 1000);

  updateControlsInterface();
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
  updateControlsInterface();
}

// function playSound(){
//   let audio = new Audio('/countdownTimer/assests/music/timer_finished_music.mp3');
// audio.play();

// }
