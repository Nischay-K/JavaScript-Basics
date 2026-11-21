let [seconds , minutes , hours] = [0 , 0 , 0];

let displayTime = document.querySelector("#display");
const themeBtn = document.querySelector("#theme-btn");
let lapList = document.querySelector("#lap-list");
let timer = null;
function stopWatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.textContent = h + ":" + m + ":" + s;
}

function watchStart(){
    if(timer === null){
        timer = setInterval(stopWatch,1000);
    } 
}

function watchStop(){
    clearInterval(timer);
    timer = null;
}

function watchReset(){
    clearInterval(timer);
    [seconds , minutes , hours] = [0 , 0 , 0];
    displayTime.textContent = "00:00:00";
    lapList.innerHTML = "";
}


themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "Switch to Light Theme";
    } else {
        themeBtn.textContent = "Switch to Dark Theme";
    }
});


function recordLap() {
    if (timer !== null) {
        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;
        const lapTime = `${h}:${m}:${s}`;


        const li = document.createElement("li");
        li.textContent = lapTime;
        lapList.appendChild(li);
        lapList.scrollTop = lapList.scrollHeight;
    }
}
