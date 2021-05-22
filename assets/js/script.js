var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start-game');




//Questions
var questions = 
'What is a javascript data type?';

var question = questions.split(' ');



//Answers
var answers = "Boolean"






/// Check answers
//var 



//Timer function. 


buttonEl.addEventListener("click",countdown);


function countdown() {
    var timeLeft = 5;


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

