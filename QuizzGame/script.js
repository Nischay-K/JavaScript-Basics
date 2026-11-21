const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark" , correct: false},
            {text: "Elephant" , correct: false},
            {text: "Blue Whale" , correct: true},
            {text: "Hippopotamus" , correct: false},
        ]
    },
    {
        question: "Which is the National Animal Of india?",
        answers: [
            {text: "Lion" , correct: false},
            {text: "Peacock" , correct: false},
            {text: "Gorilla" , correct: false},
            {text: "Tiger" , correct: true},
        ]
    },
    {
        question: "Who team won the IPL 2025 Cup?",
        answers: [
            {text: "Sunrises Hyderbad" , correct: false},
            {text: "Mumbai Indians" , correct: false},
            {text: "Royal Challengers Bengaluru" , correct: true},
            {text: "Chennai Super Kings" , correct: false},
        ]
    },
    {
        question: "Which is the largest continent?",
        answers: [
            {text: "America" , correct:false},
            {text: "India" , correct:false},
            {text: "Africa" , correct:false},
            {text: "Antartica" , correct:true},
        ]
    },
    {
        question: "Which is the Oldest language?",
        answers: [
            {text: "Kannada" , correct: false},
            {text: "Sanskrit" , correct: true},
            {text: "English" , correct: false},
            {text: "Hindi" , correct: false},
        ]
    }
];

const question = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(function(button) {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    question.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" , function(){
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});

startQuiz();