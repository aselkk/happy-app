(function () {
    document.querySelectorAll(".open-modal-btn").forEach(function(btn) {
        btn.addEventListener("click", function () {
            hideModalWindow();
            showModalWindow(this);
        });
    });
    document.querySelectorAll(".modal-hide-btn").forEach(function(btn) {
        btn.addEventListener("click", function () {
            hideModalWindow();
    })
    });
    document.querySelector(".modal-fader").addEventListener("click", function () {
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


function validate(){
    let userName = document.forms['modal-form']['user-name'].value 
    let userMail = document.forms['modal-form']['user-mail'].value 
    let checkboxes = document.querySelectorAll('input[name="social-medila-cb"]:checked');

    if((userName.length < 3) && (userName.length > 1)){
        console.log('please enter more than 3 characters');
        console.log(userName);
    } else if(userName.length === 0){
        console.log('required field');
    }

    if((userMail.length < 3) && (userMail.length > 1)){
        console.log('please enter more than 3 characters');
    }else if(userMail.value = ''){
        console.log('required field');
    }
    
    if(checkboxes.length < 1){
        console.log('choose one option')
    } 

    console.log(userName, userMail, checkboxes)
}


