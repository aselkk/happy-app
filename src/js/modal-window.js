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
}

document.querySelector('.modal-window').addEventListener(
	"click",
	function (event) {
		if (
			event.target.matches(".button-close-modal") ||
			!event.target.closest(".modal-window__modal-form")
		) {
			hideModalWindow();
		}
	},
	false 
);


function showModalWindow (buttonEl) {
    document.body.style.overflow='hidden'

    document.querySelector(".modal-window").style.display='flex'
    document.getElementById(`option-${buttonEl.id}`).checked = true;
}

function hideModalWindow () {
    document.body.style.overflow='scroll'
    document.querySelector(".modal-window").style.display='none'
    
}
