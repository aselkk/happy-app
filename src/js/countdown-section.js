export const renderCountdown = () => { 
    const section = document.querySelector('.countdown-section')
    async function getCountdown() {
        debugger
    const response = await fetch('../config.json')
    const countdown = await response.json()
    let date = new Date(countdown.timerEndDate).getTime()
    const currentDate = new Date().getTime()
    let gap = date - currentDate
    
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
    console.log('sad')
    document.querySelector('.countdown-nums__days').innerText = padZero(textDay)
    document.querySelector('.countdown-nums__hours').innerText = padZero(textHour)
    document.querySelector('.countdown-nums__minutes').innerText = padZero(textMinute)
    document.querySelector('.countdown-nums__seconds').innerText = padZero(textSecond)

    if(gap <= 1000) {
        clearInterval(interval);
        document.getElementById('countdown-section').style.display = "none";
    }
}
getCountdown()
let interval = setInterval(getCountdown, 1000);

}


