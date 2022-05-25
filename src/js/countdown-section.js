const section = document.querySelector('.countdown-section')


async function getCountdown() {
    const response = await fetch('../src/data/config.json');
    const countdown = await response.json();
    const date = new Date(countdown.timerEndDate)
    const currentDate = new Date().getTime()
    const gap = date - currentDate

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap/day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    function padZero(n) {
        return String(n).padStart(2, '0')
    }

    document.querySelector('.countdown-nums__days').innerText = padZero(textDay)
    document.querySelector('.countdown-nums__hours').innerText = padZero(textHour)
    document.querySelector('.countdown-nums__minutes').innerText = padZero(textMinute)
    document.querySelector('.countdown-nums__seconds').innerText = padZero(textSecond)

    if(gap < 10000) {
        document.getElementById('countdown-section').style.display = "none";
    }
}

setInterval(getCountdown, 1000);



