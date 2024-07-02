window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var interval;

    var appendSeconds = document.getElementById("secs");
    var appendTens = document.getElementById("min");
    var startButton = document.querySelector(".start");
    var stopButton = document.querySelector(".stop");
    var resetButton = document.querySelector(".reset");

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

    startButton.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    stopButton.onclick = function () {
        clearInterval(interval);
    };

    resetButton.onclick = function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };
};
