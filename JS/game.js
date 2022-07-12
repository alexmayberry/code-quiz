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
        correctAnswer: "ANswer 2",
        explination: "This will explination gives more information about the answer"
    }
];


// Store all of our event related elements in variables
let timerEl = document.querySelector("#timer");
let startBtn = document.querySelector("#startbtn");
let playAgainBtn = document.querySelector("#play-again-btn");
let startScreen = document.querySelector("#start");
let questionsScreen = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let resultsEl = document.querySelector("#results");
let endScreen = document.querySelector("#end-screen");
let scoreSubmitEl = document.querySelector("#score-submit");
let usernameEl = document.querySelector("#username");


// Set counter variable values
    let time = questions.length * 5 + 10;
    let currentQuestion = questions[questionPosition].question;
    let score = 0;


startBtn.addEventListener("click", startGame)

// Function `startGame`
function startGame(){
    hide(startScreen);
    unhide(questionsScreen);
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

// timer update interval that will be cleared on end game
let updateInterval = setInterval(updateTimer, 1000);


//Incriment timer down to 0 and end game if === 0
function updateTimer() {
    timerEl.textContent = time;
    if (time > 0) {
        time--;
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
        time += 5;
        score++;
    }
    else{
        console.log("wrong")
        // TODO: add a minus 5 seconds highlight to a new element next to the time readout
        resultsEl.textContent = "(Minus 3 seconts!) Not quite. The correct answer is " + questions[questionPosition].correctAnswer + ". " + questions[questionPosition].explination;
        time -= 3;
    }
    setTimeout(advanceQuestions, 3000);

}

function advanceQuestions() {
    if (questionPosition === questions.length - 1 || time === 0) {
        time = 0;
        endGame();
    } else {
    questionPosition++;
    displayCurrentQuestion();
    displayAnswers();
    }
}

function endGame() {
    console.log("Game ended :(");
    clearInterval(updateInterval);
    hide(questionsScreen);
    unhide(endScreen);
    
    // Testing if userInfo object works
    console.log("Object: " + JSON.stringify(userInfo));
    console.log("Score: " + score);
    console.log("userInfo.userScore: " + userInfo.userScore);
}

scoreSubmitEl.addEventListener("click", scoreSubmit)

// object containing user info to be stored
let userInfo = {
    username: usernameEl.value,
    userScore: score.value
}

function scoreSubmit() {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log(userInfo);
    localStorage.setItem("user-score", JSON.stringify(userinfo.userScore));
    restartGame();
} 

// TODO Restart game function
function restartGame() {

}