export const renderDarkMode = () => {

    const darkModeSection = document.querySelector('.darkmode-section')
    const darkBtn = document.getElementById("dark__btn")
    const lightBtn = document.getElementById("light__btn")

    lightBtn.addEventListener("click", function () {
        darkModeSection.classList.add("light-mode")
        lightBtn.classList.add('light-mode-on')
        darkBtn.classList.remove('light-mode-on')
        document.querySelectorAll('.dark-mode-toggle-text').forEach(e => e.innerHTML = 'light')
    })

    darkBtn.addEventListener("click", function () {
        darkModeSection.classList.remove("light-mode")
        darkBtn.classList.add('light-mode-on')
        lightBtn.classList.remove('light-mode-on')
        document.querySelectorAll('.dark-mode-toggle-text').forEach(e => e.innerHTML = 'dark')
    })
}