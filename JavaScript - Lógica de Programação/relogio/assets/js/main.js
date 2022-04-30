
function createTimeOfSeconds(seconds) {
    time = new Date(seconds * 1000);
    return time.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const timer = document.querySelector('p#timer');
let isPaused = true;
let seconds = 0;

function start() {
    isPaused = false;
    timer.style.color = 'black';
}

function pause() {
    isPaused = true;
    timer.style.color = 'red';
}

function zero() {
    seconds = 0;
}

function main() {
    setInterval(function () {
        timer.innerHTML = createTimeOfSeconds(seconds);
        if (!isPaused) seconds += 0.1;
    }, 100);
}

main();
