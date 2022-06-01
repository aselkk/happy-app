export const initModalToggling = () =>{
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
}

function showModalWindow (buttonEl) {
   document.body.style.overflow='hidden'

    document.querySelector(".modal-window").style.display='flex'

}

function hideModalWindow () {
    document.body.style.overflow='scroll'

    document.querySelector(".modal-window").style.display='none'

}