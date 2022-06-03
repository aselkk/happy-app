export const renderCountdown = () => { 

    function fetchData() {
        return new Promise(async (resolve, reject) => {
            const data = await fetch('../config.json');
            const response = await data.json();
        
            const countDownDate = new Date(response.timerEndDate).getTime();
            const now = new Date().getTime();
        
            if (countDownDate > now) {
                const gap = countDownDate - now;
                resolve(gap);
                return
            }
        
            reject()
            })
        }
        
        const x = setInterval(function() {
            fetchData().then((gap) => {
        
            const days = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((gap % (1000 * 60)) / 1000);
        
            function padZero(n) {
                return String(n).padStart(2, '0')
            }    

            document.querySelector('.countdown-nums__days').innerText = padZero(days);
            document.querySelector('.countdown-nums__hours').innerText = padZero(hours);
            document.querySelector('.countdown-nums__minutes').innerText = padZero(minutes);
            document.querySelector('.countdown-nums__seconds').innerText = padZero(seconds);

            if (gap < 0) {
                clearInterval(x);
            }

            }, passedDate)
        }, 1000);
    
        function passedDate() {
            document.getElementById('countdown-section').style.display = "none";
        }

}


