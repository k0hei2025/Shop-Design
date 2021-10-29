const backdrop = document.querySelector('.backdrop');
let button = document.querySelectorAll('.button')
let popupModel = document.querySelector('.modal')
let cancel = document.querySelector('.modal__action--negative')


console.log(backdrop);



console.log('now it becomes there display block by javascript')

const popup = (bool) => {

               if (bool === true) {
                              backdrop.style.display = 'block';
                              popupModel.style.display = 'block';
               }
               else {
                              backdrop.style.display = 'none';
                              popupModel.style.display = 'none';
               }


}


// console.log(button, 'ggggg')

for (let i = 0; i < button.length; i++) {
               console.log(button[i])
               button[i].addEventListener('click', () => {

                              popup(true);
                              console.log('button was clicked')
               })
}


cancel.addEventListener('click', () => {
               console.log('cancel was clicked')
               popup(false);
})