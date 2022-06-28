// DECLARE timer as a numer
let timerEl = document.querySelector("#timer")

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
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "How do you access and manipulate multiple DOM nodes by class using JS?",
        answers: [
            "document.getElementsByClassName()",
            "document.getElementsById()",
            "document.querySelector()",
            "document.querySelectorAll()",
        ],
        correctAnswer: "document.getElementsByClassName()"
    }
    // {
    //     question: "How do you access and manipulate multiple DOM nodes by class using JS?";
    //     answers: [
    //         "document.getElementsByClassName()",
    //         "document.getElementsById()",
    //         "document.querySelector()",
    //         "document.querySelectorAll()",
    //     ];
    //     correctAnswer: 0;
    // },
];

let currentQuestion = questions[questionPosition].question;



let startBtn = document.querySelector("#startbtn")
console.log(startBtn)
let startScreen = document.querySelector("#start");
let questionEl = document.querySelector("#question");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

startBtn.addEventListener("click", startGame)
// Function `startGame`
function startGame(){
    startScreen.classList.add("hidden");
    displayCurrentQuestion();
    displayAnswers();
    addListeners();
}

function addListeners(){
    var buttons = document.getElementsByClassName('button')
    for (element of buttons){
       element.addEventListener("click", checkAnswers)
    }
    //Listen for btn clicks
    // Return 'correct' or 'incorrect' depending on answer
    //change score
}
function checkAnswers(event){
    if(event.target.innerHTML === questions[questionPosition].correctAnswer){
        console.log("Right")
    }
    else{
        console.log("wrong")
    }
   

}

function displayCurrentQuestion(){
questionEl.innerHTML = questions[questionPosition].question
}

function displayAnswers(){
    //target 4 elements
    btn1.innerHTML = questions[questionPosition].answers[0];
    btn2.innerHTML = questions[questionPosition].answers[1];
}
    // Hide welcome screen
    // Inline style of dispaly:none

    // Set the question position to 0

    // `Display current question`

    // Set the starting value of `countdown`
    // let countdown = questions.length * 5;

    // start timer `startTimer`

        // run endGame IF countdown === 0

// Function `answerQuestion`

    // Check if answer if correct

    // Display result

        // IF  the answer is !correct

            // THEN subtract value from `countdown`

    // Increase question positino by 1

        // IF (questionPosition > questions.length) {
        //     endGame();
        // } else {
        //     display the current question
        // }

    // `Display the current question`

// Function `endGame`

    // Hide timer

    // display end of game message, final score, and field to enter player initials and button to save score

    // Clear timer interval to stop it from running
 
    // go to high score page

    // Function `recordScore`