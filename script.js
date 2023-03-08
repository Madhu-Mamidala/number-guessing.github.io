const inputNumber = document.querySelector('#input-number');
const checkNumber = document.querySelector('#check-btn');
const refreshButton = document.querySelector('#refresh-btn')
const imgfield = document.querySelector('#img-responsive')
const textAlert = document.querySelector('.alert-text')

//page refresh func
refreshButton.addEventListener('click', pageRefresh)

function pageRefresh() {
    window.location.reload()
}

//checking number func
checkNumber.addEventListener('click', checkCorrect)

//Incorrect img random
const imgIncorrectRandom = Math.floor(Math.random() * 10 + 1)
// console.log(imgIncorrectRandom);


//Giving directory Incorrect
const imgDir = `assets/Incorrect/img-${imgIncorrectRandom}.gif`


//correct img random
const imgCorrectRandom = Math.floor(Math.random() * 5 + 1)
// console.log(imgCorrectRandom);


//Giving directory Correct
const correctImgDir = `assets/correct/img-correct-${imgCorrectRandom}.gif`


//Random Number for Input
let mathRandom = Math.floor(Math.random() * 10 + 1);
// console.log(mathRandom);

function checkCorrect() {
    if (mathRandom != inputNumber.value) {

        //adding Note text (alert)
        let alertText = document.createElement('div')
        alertText.setAttribute('class', 'alert alert-info')
        alertText.innerHTML = 'Please Refresh the page and Continue'
        textAlert.appendChild(alertText)

        //creating img element
        let mainImg = document.createElement('IMG');
        mainImg.setAttribute('src', imgDir)
        mainImg.setAttribute('class', 'card-img w-50 h-50')
        imgfield.appendChild(mainImg)//appending to img felid


        inputNumber.value = ''
    } else {
        let correctImg = document.createElement('IMG');
        correctImg.setAttribute('src', correctImgDir)
        correctImg.setAttribute('class', 'card-img w-50 h-50');
        imgfield.appendChild(correctImg)
        inputNumber.value = ''
    }
}
