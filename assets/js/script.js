var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start-game');
var timeLeft = 5;



//Questions
var questions = 
'What is a javascript data type?';

var question = questions.split(' ');






buttonEl.addEventListener("click",countdown);


function countdown() {
    


    document.getElementById("card1").style.visibility = "visible";

    var timeInterval = setInterval(function () {

        if (timeLeft > 1 ) {
            
       timerEl.textContent = timeLeft + ' seconds remaining';
    
        timeLeft--;
        } else if (timeLeft === 1) {
    
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
        alert("You lose")

        timerEl.textContent = '';
    
        clearInterval(timeInterval);
    
        displayQuestions();
    
        }
    
    
    }, 1000);
    
}


//Answer Check




// if(timeLeft === 0){
//     alert("You lose");
// }


// function displayQuestions() {
//     var wordCount = 0;

// var msgInterval = setInterval(function () {

// if (question[wordCount] === undefined) {

//     clearInterval(msgInterval);
// } else {

//     mainEl.textContent = question[wordCount];
//     wordCount++;

//     console.log();
//         }

//     }, 1000);

   
// }

