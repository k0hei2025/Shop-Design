let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let password = document.getElementById('password')
// let checkbox = document.getElementById('agree-terms')
let button = document.querySelector('.button')
let input = document.querySelectorAll("input");
let check = document.querySelector('.checking')


// button.disabled = true


const functionHandler = () => {
               if (firstName.value !== '' && lastName.value !== '') {

                              console.log('its running inside condition')
                              button.disabled = false;
               }
               else {
                              button.disabled = true;
                              console.log('check')
               }

}


check.addEventListener("click", () => {

               functionHandler();
})
