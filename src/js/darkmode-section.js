let icon = document.querySelector('.darkmode-section__toggle-bttns__btn-container__btn__off')
let iconTwo = document.querySelector('.darkmode-section__toggle-bttns__btn-container__btn__on')
let text = document.querySelectorAll('.dark-mode-toggle-text')
let darkModeSection = document.querySelector('.darkmode-section')

    // toggle = function(){
    //     document.body.classList.toggle("light-mode")
    //     icon.classList.toggle("light-mode")
    //     if(document.body.classList.contains("light-mode")){
    //         iconTwo.classList.toggle("light-mode")
    //         text.innerHTML='light'
    //     } else {
    //         text.innerHTML='dark'
    //     }
    // }
    // icon.addEventListener("click", toggle);
    // iconTwo.addEventListener("click", toggle);

    // const lightMode = document.querySelector('.light__btn');
    // const darkMode = document.querySelector('.dark__btn');

    // lightMode.addEventListener("click", function(e){
    //     darkModeSection.classList.toggle("light-mode")
    //     text.innerHTML='dark'
    // })
    // darkMode.addEventListener("click", function(e){
    //     darkModeSection.classList.toggle("dark-mode")
    //     text.innerHTML='light'
    // })
    const lightBtn = document.getElementById("light__btn")
    const darkBtn = document.getElementById("dark__btn")

    lightBtn.addEventListener("click", function(){
        darkModeSection.classList.remove("dark-mode")
        darkModeSection.classList.add("light-mode")
        lightBtn.classList.add('light-mode-on');
        darkBtn.classList.remove('light-mode-on');
        text.forEach(e => e.innerHTML='light')
        

    })
    darkBtn.addEventListener("click", function(){
        lightBtn.classList.remove('light-mode-on')
        darkModeSection.classList.remove("light-mode")
        darkBtn.classList.add('light-mode-on');
        lightBtn.classList.remove('light-mode-on');
        text.forEach(e => e.innerHTML='dark')
    })





