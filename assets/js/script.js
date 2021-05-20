var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start-game');
var testEl = document.getElementById('test')


var questions = 
'how long is your name? Do you believe that we will die someday';

var question = questions.split(' ');





//Timer function. 


function countdown() {
    var timeLeft = 30;


    var timeInterval = setInterval(function () {

        if (timeLeft > 1 ) {
            
       timerEl.textContent = timeLeft + ' seconds remaining';
    
        timeLeft--;
        } else if (timeLeft === 1) {
    
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
          
        timerEl.textContent = '';
    
        clearInterval(timeInterval);
    
        displayQuestions();
    
        }
    
    
    }, 1000);
    
}


function displayQuestions() {
    var wordCount = 0;

var msgInterval = setInterval(function () {

if (question[wordCount] === undefined) {

    clearInterval(msgInterval);
} else {

    mainEl.textContent = question[wordCount];
    wordCount++;

    console.log();
        }

    }, 1000);
}

event.preventDefault();
countdown();



/////Question function 
//if questions is displaying on the screen 