const section = document.querySelector('.countdown-section')

async function getCountdown() {
    const response = await fetch('../config.json');
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

    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }
    document.querySelector('.countdown-nums__days').innerText = makeMeTwoDigits(textDay)
    document.querySelector('.countdown-nums__hours').innerText = makeMeTwoDigits(textHour)
    document.querySelector('.countdown-nums__minutes').innerText = makeMeTwoDigits(textMinute)
    document.querySelector('.countdown-nums__seconds').innerText = makeMeTwoDigits(textSecond)

    if(textSecond < 0) {
        document.getElementById('countdown-section').style.display = "none";
    }
}

setInterval(getCountdown, 1000);



