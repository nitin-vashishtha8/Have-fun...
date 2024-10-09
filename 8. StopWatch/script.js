let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    
    displayTime();
}

function displayTime() {
    const display = document.getElementById('displayTime');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(updateTime, 1000);
}

function stopWatch() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetWatch() {
    stopWatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
}

document.getElementById('startButton').addEventListener('click', startWatch);
document.getElementById('stopButton').addEventListener('click', stopWatch);
document.getElementById('resetButton').addEventListener('click', resetWatch);

// Initialize display
displayTime();