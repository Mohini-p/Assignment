

STORE = [
    { question: "What is the full form of CSS?",
    answer: ["Cascading Style Shots", "Creative Style Sheets", "Creative Style Shots", "Cascading Style Sheet" ],
    correctAnswer:"Cascading Style Sheet"
    },
    { question: "Inside which HTML element do we put the JavaScript?",
    answer: ["javascript tag", "scripting tag", "js tag", "script tag"],
    correctAnswer:"script tag"
    },
    { question: "The Defalt link color for hyperlink is :",
    answer: ["green", "blue", "purple", "red"],
    correctAnswer: "blue"
    },
    { question: "Which HTML attribute is used to define inline styles?",
    answer: ["class", "font", "style", "styles"],
    correctAnswer: "style"
    },
    { question: "What is the name of the CSS selector to style the element with id named car?",
    answer: [".car", "$car", "#car", "car"],
    correctAnswer: "#car"
    }
]


let qNumber = 0;
let score = 0;

/* for start quiz button.*/
function startQuiz() {
    $('main').on('click', '#button-start', function(event){
        $('.start-quiz').hide();
        generateQuizQuestion();
    });
}

/*quiz questions from store */
function generateQuizQuestion() {
    if (qNumber < STORE.length) {
    let question =$(`<form class ="js-quiz-form">
    <legend class = "question">${STORE[qNumber].question}</legend>
    <ul class="radiogroup" role="radiogroup" aria-labelledby="question"></ul>`);
    let answers = STORE[qNumber].answer.map(function(answerValue, answerIndex){
        return `<label for="${answerValue}"><input type="radio" id="${answerValue}" name="answer" tabindex="${answerIndex}" value="${answerValue}" aria-checked="false" required>${answerValue}</label><br>`;
    });
    let button = $(`<button type="submit" id ="button-submit">Submit</button></form>`)
    $('.js-quiz').append(question);
    $('.radiogroup').append(answers, button);
    questionNumber();
} else {
    displayResults();
}

}

/* event listener for the submit button.*/
function questionChecker(){
    $('main').on('click','#button-submit', function (event){
        if ($('input:radio').is(':checked')) {
        event.preventDefault();
        let selectedAnswer= $("input[name=answer]:checked").val();
        console.log(selectedAnswer);
        if (selectedAnswer === STORE[qNumber].correctAnswer) {
            rightAnswer();
        } else {
                wrongAnswer();
            }
        }else {
            alert('Please select an answer.')
        }
    });
}

/* updates the question number*/
function questionNumber(){
    $('header').find('#question-number').text(qNumber+1);
}

/* keeps score of correct answers*/
function scoreKeeper(){
    score++;
    $('header').find('#score').text(`${score}/5`);

}

/* for right answer*/
function rightAnswer() {
    console.log('rightAnswer ran');
    $('.js-quiz-form').hide();
    $('.js-answer').append(`<h2>You're Right!</h2>
    <p>Great Job.</p>
    <button type="button" id ="button-next">Next Question</button>`).show();
    scoreKeeper();
}

/* for wrong answer*/
function wrongAnswer() {
    $('.js-quiz-form').hide();
    $('.js-answer').append(`<h2>That answer is not quite right...</h2>
        <h3>The correct answer is:</h3>
        <p><span class="correct-answer">${STORE[qNumber].correctAnswer}</span></p>
        <button type="button" id ="button-next">Next</button>`).show();
}

/* for next question button */
function nextQuestion() {
    $('main').on('click','#button-next', function(event) {
        $('.js-answer').empty();
        $('.js-quiz-form').empty();
        qNumber++;
        generateQuizQuestion();
        $('js-quiz-form').show();
    });
}

/* displays the result */
function displayResults(){
    console.log("`displayResults` ran");
    let finalScore = (score/5)*100;
    $('.js-answer').append(`<h2>Quiz Results</h2>
    <h3>${finalScore}%</h3>
    <p>You got <span class="right-answers">${score} </span>out of 5 questions right.</p>
    <button type="button" id ="button-restart">Start a New Quiz</button>`)
}

function restartQuiz(){
    console.log('restart quiz ran');
 $('main').on('click', '#button-restart', function(event){
     console.log('restart button clicked');
    score = 0;
    qNumber = 0;
    $('.js-answer').empty();
    $('.js-quiz-form').empty();
    $('.start-quiz').show();
    $('header').find('#score').text(`${score}/5`);
    $('header').find('#question-number').text(`${qNumber}`);
 });
}

function handleQuizApp(){
    startQuiz();
    questionChecker();
    nextQuestion();
    restartQuiz();
}

/* calls the handleQuizApp to activate functions with event listeners */
$(handleQuizApp);