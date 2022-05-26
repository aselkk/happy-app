
document.getElementById("name").addEventListener('input', function(e){
  console.log(e.target.value);
  if (e.target.value.length >= 3) {
      document.querySelector(".name-input-error").innerHTML=''
  }
})

document.getElementById("mail").addEventListener('input', function(e){
  console.log(e.target.value);
  if (e.target.value.length >= 3) {
      document.querySelector(".mail-input-error").innerHTML=''
  }
})

const checkboxes = document.querySelectorAll(".checkbox-social");
checkboxes.forEach((el) => {
  el.addEventListener('change', function(e) {
      if (e.target.checked && document.querySelector(".checkbox-error").innerHTML !== '') {
          document.querySelector(".checkbox-error").innerHTML = ''
      }
  })
})

document.getElementById("modal-form-id").addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();

  const name = document.forms['modal-form']['user-name'].value;
  const mail = document.forms['modal-form']['user-mail'].value;
  const checkboxes = document.querySelectorAll('input[name="social-media-cb"]:checked');

  validateFields(name, 'name');
  validateFields(mail, 'mail');

  if (!checkboxes.length) {
    document.querySelector(".checkbox-error").innerHTML = 'please choose one option'
  }

  if (validateFields(name, 'name') && validateFields(mail, 'mail') && checkboxes.length) {
    submitData();
  }
}

function validateFields(field, fieldName) {
  const isFieldEmpty = field.length
  const doesFieldHasThreeCharacters = field.length < 3 && field.length > 1;

  if (!isFieldEmpty) {
    document.querySelector(`.${fieldName}-input-error`).innerHTML = 'required field'
  }

  if (doesFieldHasThreeCharacters) {
    document.querySelector(`.${fieldName}-input-error`).innerHTML = 'please enter three or more characters'
  }

  return isFieldEmpty && !doesFieldHasThreeCharacters
}


function submitData() {
  document.querySelector('.modal-btn').setAttribute('disabled', '')
  document.querySelector('.loader-wrapper').style = 'display: block'

  setTimeout(() => {
    document.querySelector('.modal-btn').removeAttribute('disabled')
    document.querySelector('.loader-wrapper').style = 'display: none'

    document.getElementById('name').value = ''
    document.getElementById('mail').value = ''
    checkboxes.forEach(e => e.checked = false)

    document.querySelector(".modal-fader").classList.remove("active")
    document.querySelector(".modal-window").classList.remove("active")

  }, 3000)
}

