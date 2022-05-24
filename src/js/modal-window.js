(function () {
    document.querySelectorAll(".open-modal-btn").forEach(function(el) {
        el.addEventListener("click", function () {
            hideModalWindow();
            showModalWindow(this);
        });
    });
    document.querySelectorAll(".modal-hide-btn").forEach(function(el) {
        el.addEventListener("click", function () {
            hideModalWindow();
    })
    });
    modalFader.addEventListener("click", function () {
            hideModalWindow();
    });
})();

function showModalWindow (buttonEl) {
    let modalTarget = "#" + buttonEl.getAttribute("data-target");
    
    document.querySelector(".modal-fader").classList.add("active");
    document.querySelector(modalTarget).classList.add("active");

    document.getElementById(`option-${buttonEl.id}`).checked = true;
}
function hideModalWindow () {
    document.querySelector(".modal-fader").classList.remove("active");
    document.querySelector(".modal-window").classList.remove("active");
}

