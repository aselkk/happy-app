let icon = document.querySelector('.darkmode-section__toggle-bttns__btn-container__btn-off')
let iconTwo = document.querySelector('.darkmode-section__toggle-bttns__btn__on')

    icon.addEventListener("click", function(){ 
        document.body.classList.toggle("light-mode")
        if(document.body.classList.contains("light-mode")){
            icon.src='/src/assets/img/light-mode-on.svg'
            iconTwo.src='/src/assets/img/dark-mode-off.svg'
        } else {
            icon.src='/src/assets/img/light-mode-off.svg'
            iconTwo.src='/src/assets/img/dark-mode-on.svg'
        }
    });
    iconTwo.addEventListener("click", function(){ 
        document.body.classList.toggle("light-mode")
        document.querySelector('.darkmode-section__toggle-bttns__text__off').toggle('light-mode-text')
        if(document.body.classList.contains("light-mode")){
            icon.src='/src/assets/img/light-mode-on.svg'
            iconTwo.src='/src/assets/img/dark-mode-off.svg'
        }
        else {
            icon.src='/src/assets/img/light-mode-off.svg'
            iconTwo.src='/src/assets/img/dark-mode-on.svg'
        }
    });


