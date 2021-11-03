window.onload = function() {
    
    let tens = 00;
    let seconds = 00;
    let minutes = 00;

    let appendMinutes = document.getElementById('minutes');
    let appendSeconds = document.getElementById('seconds');
    let appendTens = document.getElementById('tens');

    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');
    let buttonSave = document.getElementById('save')
    let list = document.getElementById('itens')
    let Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    buttonSave.onclick = function() {
        // codigo com pequeno bug
        if(tens <= 9) {
            tens = "0" + tens;
        }
        if(seconds <= 9 ) {
            seconds = "0" + seconds;
        }
        //
        list.innerHTML += `<li>${minutes}:${seconds}:${tens}</li`
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

    }





}