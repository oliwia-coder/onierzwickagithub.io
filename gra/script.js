'use strict';
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const header =  document.querySelector('header');
const labelScore = document.querySelector('.label-score');
const labelHighScore = document.querySelector('.label-highscore');

let won = false;
let highScoreValue = parseInt(highScore.textContent);
// checkBtn.textContent = 'tutaj';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let scoreValue = parseInt(score.textContent);
// console.log(scoreValue);
console.log(secretNumber);


function checkNumbers() {
    console.log(guessNumber);
    if(scoreValue > 0 && won === false && (guessNumber.valueAsNumber) && guessNumber.value % 1 === 0 && guessNumber.value > 0 && guessNumber.value < 21) {
        if (parseInt(guessNumber.value) === secretNumber) {
             message.textContent = 'You\'ve won with the score of: ' + scoreValue;
             console.log('if');
             if(highScoreValue < scoreValue) {
                 console.log('if2');
                 highScoreValue = scoreValue;
                 highScore.textContent =  highScoreValue;
             }
             won = true;
            //  message.classList.add('green-font');
            //  body.classList.add('green-font');
            //  number.classList.add('green-background'); 
            //  header.classList.add('green-border');
            //  checkBtn.classList.add('green-background');
            //  againBtn.classList.add('green-background');
            //  guessNumber.classList.add('green-font', 'green-border');
            //  labelScore.classList.add('green-font');
            //  labelHighScore.classList.add('green-font');
            deleteStyles();
             setStyles('green-background', 'green-border', 'green-font' );
             number.textContent = secretNumber;
        }
        // .textContent - dla reszty
        // .value - dla formularzy
        else {
            scoreValue--;
            score.textContent = scoreValue;
            if(scoreValue > 0) {
                message.textContent = 'guess on...';
            }
            else {
                message.textContent = 'You\'ve lost try again';
                // message.style.color = 'red';
                // body.style.color = 'red';
                // number.style.backgroundColor = 'red';
                // document.querySelector('header').style.borderColor = 'red'; 
                //to wyzej to alternatywa dla przechowywania w zmiennej, a pozniej
                //wykorzystywania tej zmiennej do zmiany stylu - w zmiennej
                //przechowywalibysmy referencje do tego obiektu, ktory jest
                //uzyskiwany przez  document.querySelector('header'), czyli
                //to dokladnie to samo, tylko majac to w zmiennej mamy krotszy zapis
                //i nie musimy ciagle pisac  document.querySelector('header')
                // header.style.borderColor = 'red';
                // checkBtn.style.backgroundColor= 'red';
                // againBtn.style.backgroundColor = 'red';
                // guessNumber.style.borderColor = 'red';
                // guessNumber.style.color ='red';
                // labelScore.style.color = 'red';
                // labelHighScore.style.color = 'red';

                // message.classList.add('red-font');
                // body.classList.add('red-font');
                // number.classList.add('red-background'); 
                // header.classList.add('red-border');
                // checkBtn.classList.add('red-background');
                // againBtn.classList.add('red-background');
                // guessNumber.classList.add('red-font', 'red-border');
                // labelScore.classList.add('red-font');
                // labelHighScore.classList.add('red-font');
                deleteStyles();
                setStyles('red-background', 'red-border', 'red-font' );
                number.textContent = secretNumber;
            }
            console.log('else');
        }
    }
}

function setStyles(background, border, font) {
    message.classList.add(font);
    body.classList.add(font);
    number.classList.add(background); 
    header.classList.add(border);
    checkBtn.classList.add(background);
    againBtn.classList.add(background);
    guessNumber.classList.add(font, border);
    labelScore.classList.add(font);
    labelHighScore.classList.add(font);
}

function deleteStyles() {
    message.classList.remove('red-font', 'green-font', 'white-font');
    body.classList.remove('red-font', 'green-font', 'white-font');
    number.classList.remove('red-background', 'green-background', 'white-background'); 
    header.classList.remove('red-border', 'green-border', 'white-border');
    checkBtn.classList.remove('red-background', 'green-background', 'white-background');
    againBtn.classList.remove('red-background', 'green-background', 'white-background');
    guessNumber.classList.remove('red-font', 'green-font', 'white-font', 'red-border', 'green-border', 'white-border');
    labelScore.classList.remove('red-font', 'green-font', 'white-font');
    labelHighScore.classList.remove('red-font', 'green-font', 'white-font');
}

function restart() {
    message.textContent= 'Start guessing...';
    score.textContent= '20';
    scoreValue = 20;
    secretNumber = Math.floor(Math.random() * 20 +1);
    console.log(secretNumber);
    guessNumber.value = '';
    won = false;

    // message.style.color = '#eee';
    // body.style.color = '#eee';
    // number.style.backgroundColor = '#eee';
    // header.style.borderColor = '#eee';
    // checkBtn.style.backgroundColor= '#eee';
    // againBtn.style.backgroundColor = '#eee';
    // guessNumber.style.borderColor = '#eee';
    // guessNumber.style.color ='#eee';
    // labelScore.style.color = '#eee';
    // labelHighScore.style.color = '#eee';

    
    deleteStyles();
    setStyles('white-background', 'white-border', 'white-font');

    // message.classList.add('green-font');
    // body.classList.add('green-font');
    // number.classList.add('green-background'); 
    // header.classList.add('green-border');
    // checkBtn.classList.add('green-background');
    // againBtn.classList.add('green-background');
    // guessNumber.classList.add('green-font', 'green-border');
    // labelScore.classList.add('green-font');
    // labelHighScore.classList.add('green-font');
    number.textContent = '?';
}

checkBtn.addEventListener('click', checkNumbers);
againBtn.addEventListener('click', restart);

// className 
// masz klase red-border, ale chcesz zmienic na green-border 
// classList