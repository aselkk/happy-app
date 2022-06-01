(function () {
    document.querySelectorAll(".open-modal-btn").forEach(function(btn) {
        btn.addEventListener("click", function () {
            hideModalWindow()
            showModalWindow(this)
        })
    })
    document.querySelectorAll(".modal-hide-btn").forEach(function(btn) {
        btn.addEventListener("click", function () {
            hideModalWindow()
    })
    })
    document.querySelector(".modal-fader").addEventListener("click", function () {
            hideModalWindow()
    })
})()

function showModalWindow (buttonEl) {
    // let modalTarget = "#" + buttonEl.getAttribute("data-target")
    document.body.style.overflow='hidden'

    document.querySelector(".modal-window").style.display='flex'
    

    // document.querySelector(modalTarget).classList.add("active")

    document.getElementById(`option-${buttonEl.id}`).checked = true
}

function hideModalWindow () {

    // document.querySelector(".modal-fader").classList.remove("active")
   
    document.querySelector(".modal-window").style.display='none'


}

