const THE_DAY = new Date(2019, 10, 28, 0, 0, 0, 0).getTime();

const now = (new Date).getTime();

const timerCallback = () => {
    const now = (new Date).getTime();

    const timeDifference = THE_DAY - now;

    if (timeDifference > 0) {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    } else {
        document.getElementById('timer').innerHTML = 'allo';
        // add stuff
    }
};

timerCallback();

const timer = setInterval(timerCallback, 1000);


