let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

const displayTime = document.querySelector("#display");
const lapList = document.querySelector("#lap-list");
const themeBtn = document.querySelector("#theme-btn");

// Stopwatch Logic
function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.textContent = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer === null) {
        timer = setInterval(stopWatch, 1000);
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.textContent = "00:00:00";
    lapList.innerHTML = "";
}

// Lap Timer
function recordLap() {
    if (timer !== null) {
        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;
        const lapTime = `${h}:${m}:${s}`;

        const li = document.createElement("li");
        li.textContent = lapTime;
        lapList.appendChild(li);
        lapList.scrollTop = lapList.scrollHeight; // auto-scroll
    }
}

// Dark/Light Theme
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
});
