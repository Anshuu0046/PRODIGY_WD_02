"use strict";
const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval = null;

function updateDisplay() {
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (interval) return;
    interval = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    updateDisplay();
});
