(function () {
    document.querySelectorAll(".open-modal-btn").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            hideAllModalWindows();
            showModalWindow(this);
        });
    });

    document.querySelectorAll(".modal-hide-btn").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            hideAllModalWindows();
        });
    });
    
    document.querySelector(".modal-fader").addEventListener("click", function () {
        hideAllModalWindows();
    });
})();
function showModalWindow (buttonEl) {
    let modalTarget = "#" + buttonEl.getAttribute("data-target");
    
    document.querySelector(".modal-fader").className += " active";
    document.querySelector(modalTarget).className += " active";

    document.getElementById(`option-${buttonEl.id}`).checked = true;
}
function hideAllModalWindows () {
    let modalFader = document.querySelector(".modal-fader");
    let modalWindows = document.querySelectorAll(".modal-window");
    
    if(modalFader.className.indexOf("active") !== -1) {
        modalFader.className = modalFader.className.replace("active", "");
    }
    
    modalWindows.forEach(function (modalWindow) {
        if(modalWindow.className.indexOf("active") !== -1) {
            modalWindow.className = modalWindow.className.replace("active", "");
        }
    });
}