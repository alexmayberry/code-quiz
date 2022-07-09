// DECLARE questions as an array
let questionPosition = 0;
let questions = [
    {
        question: "How do you access and manipulate multiple DOM nodes by class using JS?",
        answers: [
            "document.getElementsByClassName()",
            "document.getElementsById()",
            "document.querySelector()",
            "document.querySelectorAll()",
        ],
        correctAnswer: "document.getElementsByClassName()",
        explination: "This will explination gives more information about the answer"
    },
    {
        question: "This is the second question!!!",
        answers: [
            "ANswer 1",
            "ANswer 2",
            "document.querySelector()",
            "document.querySelectorAll()",
        ],
        correctAnswer: "document.getElementsByClassName()",
        explination: "This will explination gives more information about the answer"
    }
];


// Store all of our event related elements in variables
let timerEl = document.querySelector("#timer");
let startBtn = document.querySelector("#startbtn");
let startScreen = document.querySelector("#start");
let questionsScreen = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let resultsEl = document.querySelector("#results");
let endScreen = document.querySelector("#end-screen");


// Set counter variable values
    let time = 60;
    let currentQuestion = questions[questionPosition].question;


startBtn.addEventListener("click", startGame)

// Function `startGame`
function startGame(){
    hide(startScreen);
    unhide(questionsScreen);
    startTimer();
    displayCurrentQuestion();
    displayAnswers();
    addListeners();
}

function hide(item) {
    item.classList.add("hidden");
}

function unhide(item) {
    item.classList.remove("hidden");
}

// TODO: 'startTimer' function
function startTimer(){
setInterval(updateTimer, 1000);
}

//Incriment timer down to 0 and end game if === 0
function updateTimer() {
    timerEl.textContent = time;
    if (time > 0) {
        time--;
    } else {
        time = 0;
        endGame();
    }
}


function displayCurrentQuestion(){
    questionEl.innerHTML = questions[questionPosition].question
}
    
function displayAnswers(){
    btn1.innerHTML = questions[questionPosition].answers[0];
    btn2.innerHTML = questions[questionPosition].answers[1];
    btn1.innerHTML = questions[questionPosition].answers[2];
    btn2.innerHTML = questions[questionPosition].answers[3];
    resultsEl.textContent = "";
}
    
//Listen for btn clicks
function addListeners(){
    var buttons = document.getElementsByClassName('button')
    for (element of buttons){
       element.addEventListener("click", checkAnswers)
    }
}


function checkAnswers(event){
    if(event.target.innerHTML === questions[questionPosition].correctAnswer){
        console.log("Right")
        resultsEl.textContent = "Awesome, thats correct! " + questions[questionPosition].explination;
    }
    else{
        console.log("wrong")
        // TODO: add a minus 5 seconds highlight to a new element next to the time readout
        resultsEl.textContent = "(Minus 5 seconts!) Not quite. The correct answer is " + questions[questionPosition].correctAnswer + ". " + questions[questionPosition].explination;
        time -= 5;
    }
    setTimeout(advanceQuestions, 2000);

}

function advanceQuestions() {
    if (questionPosition === questions.length - 1) {
        endGame();
    } else {
    questionPosition++;
    displayCurrentQuestion();
    displayAnswers();
    }
}
// Set the starting value of `countdown`
    // let countdown = questions.length * 5;

    // Increase question positino by 1

        // IF (questionPosition > questions.length) {
        //     endGame();
        // } else {
        //     display the current question
        // }

    // `Display the current question`

function endGame() {
    console.log("Game ended :(");
    clearInterval(startTimer);
    hide(questionsScreen);
    unhide(endScreen);
}

    // Hide timer

    // display end of game message, final score, and field to enter player initials and button to save score

    // Clear timer interval to stop it from running
 
    // go to high score page

    // Function `recordScore`