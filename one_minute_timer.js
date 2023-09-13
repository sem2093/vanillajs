function startTimer(){
function countdownTimer(seconds) {
  var timerDisplay = document.getElementById("seconds");

  function updateTimer() {
    if (seconds < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Timer done!";
      return;
    }

    timerDisplay.textContent = seconds;
    seconds--;
  }

  updateTimer(); 

  var timerInterval = setInterval(updateTimer, 1000); 

  var progressBar = document.getElementById("myProgressBar");
  var width = seconds;

  var interval = setInterval(function () {
    if (width < 0) {
      clearInterval(interval);
    } else {
      width--;
      progressBar.style.width = width + "px";
      
    }
  }, 1000); 

}

countdownTimer(60);

}
