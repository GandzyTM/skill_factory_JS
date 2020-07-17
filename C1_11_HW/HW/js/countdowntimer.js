const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const start = document.querySelector('.j-btn__start');
const pause = document.querySelector('.j-btn__pause');
const reset = document.querySelector('.j-btn__reset');
const plus_alt_min = document.querySelector('.j-btn__plus_min');
const plus_alt_sec = document.querySelector('.j-btn__plus_sec');
const minus_alt_min = document.querySelector('.j-btn__minus_min');
const minus_alt_sec = document.querySelector('.j-btn__minus_sec');

let countSec = 0;
let countMin = 0;
let nIntervId = 0;
let total = 0;

const updateText = () => {
    minutes.innerHTML = (0 + String(countMin)).slice(-2);
    seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const pauseTimer = () => {
    console.log('paused');
    if (nIntervId) {
        clearInterval(nIntervId);
        nIntervId = null;
    }
}

const countDownFinish = () => {
    if (total <= 0) {
        timer.style.display = 'none';
        message.innerHTML = '<p>I am done...</p>'
    }
}

plus_alt_sec.addEventListener('click', () => {
    console.log('click plus alternative sec')
    if (countSec < 59) ++countSec;
    else {
        countSec = 0;
        ++countMin;
    }
    updateText()
});

plus_alt_min.addEventListener('click', () => {
    console.log('click plus alternative min')
    if (countMin < 59) ++countMin;
    updateText()
});

minus_alt_min.addEventListener('click', () => {
    console.log('click minus alternative min')
    if (countMin <= 0 && countSec === 0) {
        countSec = 0;
        countMin = 0;
        return;
    }
    if (countMin > 0) --countMin;
    updateText();
});

minus_alt_sec.addEventListener('click', () => {
    console.log('click minus alternative sec')
    if (countMin <= 0 && countSec === 0) {
        countSec = 0;
        countMin = 0;
        return;
    }
    if (countSec > 0) --countSec;
    else {
        countSec = 59;
        --countMin;
    }
    updateText();
});

start.addEventListener('click', () => {
    total = countSec + countMin * 60;
    console.log('countMin', countMin);
    console.log('nIntervId', nIntervId)
    console.log('total = ', total);
    if (!nIntervId && total > 0) {
        nIntervId = setInterval(() => {
            console.log('total = ', total);
            if (total > 0) {
                if (countSec > 0) {
                    countSec--;
                    total--;
                }
                else {
                    countSec = 59;
                    countMin--;
                    total--;
                }
                updateText();
            } else {
                clearInterval(nIntervId);
                nIntervId = null;
                countDownFinish();
            }
        }, 1000);
    }
});

reset.addEventListener('click', () => {
    console.log('click reset');
    countMin = 0;
    countSec = 0;
    total = countSec + countMin * 60;
    clearInterval(nIntervId);
    nIntervId = null;
    updateText();
});

pause.addEventListener('click', () => {
    pauseTimer();
});



