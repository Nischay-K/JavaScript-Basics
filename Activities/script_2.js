const startBtn = document.querySelector("#startDownload");
const resetBtn = document.querySelector("#resetDownload");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");

let progress = 0;
let downloadInterval = null;

// Start Download
startBtn.addEventListener("click", function() {
  startBtn.disabled = true;
  resetBtn.disabled = true;

  downloadInterval = setInterval(function() {
    if (progress >= 100) {
      clearInterval(downloadInterval);
      progressText.textContent = "Download Complete ✅";
      progressFill.style.background = "rgba(46, 204, 113, 0.8)"; // green on complete
      resetBtn.disabled = false;
    } else {
      progress += 1;
      progressFill.style.width = progress + "%";

      // Optional: change color gradually
      if (progress < 50) {
        progressFill.style.background = "rgba(255, 255, 255, 0.7)";
      } else {
        progressFill.style.background = "rgba(255, 255, 255, 0.9)";
      }

      progressText.textContent = progress + "%";
    }
  }, 50); // speed
});

// Reset Download
resetBtn.addEventListener("click", function() {
  clearInterval(downloadInterval);
  progress = 0;
  progressFill.style.width = "0%";
  progressFill.style.background = "rgba(255, 255, 255, 0.7)";
  progressText.textContent = "0%";
  startBtn.disabled = false;
  resetBtn.disabled = false;
});
