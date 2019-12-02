const THE_DAY = new Date(2019, 3, 7, 0, 0, 0, 0).getTime();

const LEFT_CELEBRATION_GIF_NAMES = ['banana.gif', 'datboi.gif'];
const RIGHT_CELEBRATION_GIF_NAMES = ['snoop.gif', 'wow.gif'];
const EXTRA_CELEBRATION_GIF_NAME = 'fireworks.gif';

let isTimerVisible = true;

const updateTimer = (timeDifference) => {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
};

const letsCelebrate = () => {
    document.getElementById('timer').innerHTML = '0d 0h 0m 0s';
    document.getElementById('timer').style.color = 'red';
    clearInterval(timer);

    const divs = document.getElementsByClassName('fireworks');
    for (let i = 0; i < divs.length; i++) {
        for (let j = 0; j < 3; j++) {
            const gif = document.createElement('img');
            gif.src = 'assets/' + EXTRA_CELEBRATION_GIF_NAME;
            divs[i].appendChild(gif);
        }
    }

    for (let gifName of LEFT_CELEBRATION_GIF_NAMES) {
        const gif = document.createElement('img');
        gif.className = 'image';
        gif.src = 'assets/' + gifName;
        document.getElementById('left-celebration').appendChild(gif);
    }

    for (let gifName of RIGHT_CELEBRATION_GIF_NAMES) {
        const gif = document.createElement('img');
        gif.className = 'image';
        gif.src = 'assets/' + gifName;
        document.getElementById('right-celebration').appendChild(gif);
    }

    setInterval(() => {
        document.getElementById('timer').style.visibility = isTimerVisible ? 'hidden' : 'visible';
        isTimerVisible = !isTimerVisible;
    }, 400);
};

const timerCallback = () => {
    const now = (new Date).getTime();

    const timeDifference = THE_DAY - now;

    if (timeDifference > 0) {
        updateTimer(timeDifference);
    } else {
        letsCelebrate();
    }
};

const timer = setInterval(timerCallback, 1000);

timerCallback();