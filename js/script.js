const question = document.querySelector(".question_text");
const choices = Array.from(document.getElementsByClassName("choices-text"));
const localStorage = window.localStorage;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: "Arrays in JavaScript can be used to store ________.",
    choices: [
        'A. Numbers and Strings',
        'B. Other Arrays',
        'C. Booleans',
        'D. All of the Above',
    ],
    correctAnswer: 4 // 'D. All of the Above'
},
    {
    question: "String Values must be enclosed with _______ when being assigned to variables.",
    choices: [
        'A. Commas',
        'B. Curly Brackets',
        'C. Quotes', 
        'D. Parenthesis',
    ],
    correctAnswer: 3 //'C. Quotes',
},
    {
    question: "Commonly used data types DO NOT include:",
    choices: [
        'A. Strings',
        'B. Booleans',
        'C. Alerts',
        'D. Numbers',
    ],
    correctAnswer: 3 // 'C. Alerts',
},
    {
    question: "A very useful tool use during development and debugging for printing content to the debugger is:",
    choices: [
        'A. JavaScript',
        'B. Terminal/Bash',
        'C. For Loops',
        'D. Console.Log',
    ],
    correctAnswer: 4 // 'D. Console.Log',
 },
    {
    question: "The condition in an if / else statement is enclosed with ___________. ",
    choices: [
        'A. Quotes',
        'B. Curly Brackets',
        'C. Parenthesis',
        'D. Square Brackets',
    ],
    correctAnswer: 3 // 'C. Parenthesis',
},

    {
    question: "Which of the following two CSS properties are used to set an HTML element’s foreground color and background color, respectively?",
    choices: [
        'A. Foreground-Color and Background-Color',
        'B. Color and Background-Color',
        'C. Color-Foreground and Color-Background',
        'D. Color-Font and Color-Back',
    ],
    correctAnswer: 2 // 'B. Color and Background-Color',
},
    {
    question: "What is the correct definition of an HTML element?",
    choices: [
        'A. The first, or opening, HTML tag',
        'B. HTML code that does not require opening or closing tags',
        'C. An HTML tag adn the content that it contains or marks up',
        'D. The second, or closing, HTML tag. Closing tags have a forward slash (/) inside of them.',
    ],
    correctAnswer: 3 // 'C. An HTML tag and the content that it contains or marks up',
},
    {
    question: "What is a directory?",
    choices: [
        'A. A folder used to store files.',
        'B. A Tree Structure',
        'C. A command to a computer',
        'D. A file',
    ],
    correctAnswer: 1 // 'A. A folder used to store files.',
    
},
    {
    question: "What does API stand for?",
    choices: [
        'A. Application Processes Integration',
        'B. Application Programming Interface',
        'C. Application Platform Interface',
        'D. Application Programmer Interface',
    ],
    correctAnswer: 2 //'B. Application Programming Interface',
},
    {
    question: "S What does CSS stand for?",
    choices: [
        'A. Computer Systems Support',
        'B. Custom Style Sheet',
        'C. Computer Software Services',
        'D. Cascading Style Sheet',
    ],
    correctAnswer: 4 // 'D. Cascading Style Sheet',
    }
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
const QUIZ_TIME_INIT = 150;      // in seconds
const INCORRECT_PENALTY = 15;   // in seconds
const TIMER_DELAY = 50;         // in microseconds, higher value messes with timer()
const TIMER_LINE_WIDTH = 500;   // in px


// DEBUG when click happens
document.body.onclick = function () {
    console.log("CLICK");
}
// DEBUG end
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    getNewQuestion();
};

        getNewQuestion = () => {
            if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end of the page
        return window.location.assign("/end.html");
            }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach (choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.correctAnswer) {
            classToApply = 'correct';
        }
        
        /* Debug lines
        // const classToApply = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
        
        // console.log(selectedAnswer == currentQuestion.correctAnswer);
         */

         selectedChoice.parentElement.classList.add(classToApply);
        
         setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    });
});



startGame();     

     

      
        
        

        
        
       //selecting all required elements
const begin_btn = document.querySelector(".begin_btn button");
const hi_score_btn = document.querySelector(".hi_score_btn button");
const quiz_rules_box = document.querySelector(".quiz_rules_box");
const hi_score_box = document.querySelector(".hi_score_box");
const leave_btn = quiz_rules_box.querySelector(".buttons .leave");
const continue_btn = quiz_rules_box.querySelector(".buttons .continue");
const main_menu_btn = hi_score_box.querySelector(".buttons .main_menu");
const clear_btn = hi_score_box.querySelector(".buttons .clear");
const quiz_box = document.querySelector(".quiz_box");
const final_score_box = document.querySelector(".final_score_box");
const enter_score_btn = final_score_box.querySelector(".buttons .enter_score")


const enter_score_box = document.querySelector(".enter_score_box");
const submit_btn = enter_score_box.querySelector(".buttons  .submit")
const quit_btn = final_score_box.querySelector(".buttons .quit");
const choices_list = document.querySelector(".choices_list");
const time_line = document.querySelector("header .timer");
const timeText = document.querySelector(".timer .ticktock_text");
const timeCount = document.querySelector(".timer .ticktock_seconds");
const conclusion_text = document.querySelector(".conclusion_text");

// Set up the form so that it doesn't refresh the page
const scoreForm = enter_score_box.querySelector(".score_form");
function handleForm(event) { event.preventDefault(); } 
scoreForm.addEventListener('submit', handleForm);

// if startQuiz button is clicked
begin_btn.onclick = ()=>{
    quiz_rules_box.classList.add("activeInfo"); //show quiz rules box
}

// Configure enter_score_btn
enter_score_btn.onclick = () => {
    final_score_box.classList.remove("activeResult");
    final_score_box.classList.remove("active");
    enter_score_box.classList.remove("inactive");
    enter_score_box.classList.add("active");
}

// Go to high score page on clicking hi_score_btn
hi_score_btn.onclick = ()=>{
    hi_score_box.classList.remove("inactive");
    hi_score_box.classList.add("active");
    updateHighScoreList();
}

// Configure submit_btn to go to high score page and add score into storage
submit_btn.onclick = () => {
    // Get the initials, then send it to submitScore
    let name = scoreForm.elements["name"].value;
    submitScore(name);
    name = "";

    // Change the boxes being displayed
    enter_score_box.classList.remove("active");
    enter_score_box.classList.add("inactive");
    hi_score_box.classList.remove("inactive");
    hi_score_box.classList.add("active");
}

// Configure clear_btn to clear high scores
clear_btn.onclick = () => {
    localStorage.setItem("highScores", JSON.stringify([]));
    updateHighScoreList();
}

// if leave, quit, or main menu button is clicked, return to main menu
leave_btn.onclick = ()=>{
    quiz_rules_box.classList.remove("activeInfo"); //hide quiz rules bos
}
quit_btn.onclick = ()=>{
    final_score_box.classList.remove("active");
    final_score_box.classList.add("inactive"); //hide final score box
}

// if continueQuiz button is clicked
continue_btn.onclick = ()=>{
    quiz_rules_box.classList.remove("activeInfo"); //hide quiz rules box
    // quiz_box.classList.remove("inactive");
    // quiz_box.classList.add("active");
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(QUIZ_TIME_INIT); //calling startTimer function
    // startTimerLine(0); //calling startTimerLine function
}

// Initialise quiz metadata
let quizTime =  QUIZ_TIME_INIT;    // in seconds
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
// let widthValue = 0;
let isWrongAnswerSelected = false;
// const restart_quiz = final_score_box.querySelector(".buttons .restart");
const quit_quiz = final_score_box.querySelector(".buttons .quit");

/*
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    // final_score_box.classList.remove("active"); //hide final score box
    // final_score_box.classList.add("inactive"); //hide final score box
    // final_score_box.classList.remove("activeResult"); //hide final score box
    quizTime = QUIZ_TIME_INIT; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    // widthValue = 0;
    showQuestions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(quizTime); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Leftover"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
*/

// if quit_quiz button or main_menu_btnclicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
main_menu_btn.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_questions");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQuestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        // clearInterval(counter); //clear counter
        // clearInterval(counterLine); //clear counterLine
        // startTimer(quizTime); //calling startTimer function
        // startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Remaining"; //change the timeText to Time Leftover
        next_btn.classList.remove("show"); //hide the next button
    }else{
        console.log("FINISED");
        clearInterval(counter); //clear counter
        showResult(); //calling showResult function
    }
}

// getting questions and choices from array
function showQuestions(index){
    const que_text = document.querySelector(".question_text");
    
    //creating a new span and div tag for question and choice and passing the value using array index
    let que_tag = '<span>'+ que_numb + ". " + questions[index].question +'</span>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag

    /* let choice_tag = '<div class="choice"><span>'+ questions[index].choices[0] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[1] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[2] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[3] +'</span></div>';

    choices_list.innerHTML = choice_tag; //adding new div tag inside choice_tag */
    
    const choices = choices_list.querySelectorAll(".choices");
    let isChoiceSelected = false;
    
    // edit span ONLY

    // set onclick attribute to all available choices
    for(i=0; i < choices.length; i++){
        const choice_text = choices[i].querySelector("span");
        choice_text.innerHTML = questions[index].choices[i];
        choices[i].innerHTML = "";
        choices[i].appendChild(choice_text);

        choices[i].onclick = function() {
            isChoiceSelected = choiceselected(this, isChoiceSelected)
        };
    }
    
}

// creating the new div tags which for icons
let crossIconTag = `<div class="emoji sadtear"><i class='far fa-sad-tear' style='font-size:36px'></i></div>`;
let tickIconTag = `<div class="emoji grinstars"><i class='far fa-grin-stars' style='font-size:36px'></i></div>`;
/* let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>'; */

//if user clicked on choice
function choiceselected(answer, isChoiceSelected){
    if (isChoiceSelected) {
        return true;    // Disable picking another choice after selecting once
    }

    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected choice
    let correcAns = questions[que_count].choices[[questions[que_count].correctAnswer-1]]; //getting correct answer from array, shifted by 1 due to array indexing
    const allchoices = choices_list.children.length; //getting all choice items
    if(userAns == correcAns){ //if user selected choice is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected choice
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected choice

        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected choice
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected choice
        
        isWrongAnswerSelected = true;
        console.log("Falsing isWrongAnswerSelected");
        console.log("Wrong Answer");
        for(i=0; i < allchoices; i++){
            if(choices_list.children[i].textContent == correcAns){ //if there is an choice which is matched to an array answer 
                choices_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched choice
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allchoices; i++){
        choices_list.children[i].classList.add("disabled"); //once user select an choice then disabled all choices
    }
    next_btn.classList.add("show"); //show the next button if user selected any choice
    
    // Disable selecting another choice afterwards by setting isChoiceSelected = true
    return true;
}
function showResult(){
    quiz_rules_box.classList.remove("activeInfo"); //hide quiz rules box
    quiz_box.classList.add("inactive");
    final_score_box.classList.remove("inactive"); //hide final score box
    final_score_box.classList.add("active"); //hide final score box
    // final_score_box.classList.remove("activeResult"); //hide final score box
    final_score_box.classList.add("activeResult"); //show final score box
    const scoreText = final_score_box.querySelector(".final_score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats!, you got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice, you got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry, you got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Function to enter score
function submitScore(name) {
    let scoreArray = JSON.parse(localStorage.getItem("highScores"));
    if (!Array.isArray(scoreArray)) {
        console.log("Initialising high scores")
        localStorage.setItem("highScores", JSON.stringify([]));
    }
    // Get the scores array and add a new entry
    console.log(scoreArray)
    scoreArray.push({name: name, score: userScore});

    // Sort, then store the edited score array
    scoreArray.sort( (entry1, entry2) => {
        console.log(entry1.score);
        console.log(entry2.score);
        return entry2.score - entry1.score; // Sort in desending order
    });
    localStorage.setItem("highScores", JSON.stringify(scoreArray));

    // Update the high scores
    updateHighScoreList();
}

// Update the high scores with the latest localStorage data
function updateHighScoreList() {
    // Get scores array form localStorage
    let scoreArray = JSON.parse(localStorage.getItem("highScores"));

    // Get score_entries and update their innerHTML
    let score_list = hi_score_box.querySelector(".score_list");
    let newInnerHTML = ``;
    for (let index = 0; index < scoreArray.length; index++) {
        const entryText = scoreArray[index].name + " - " + scoreArray[index].score;
        newInnerHTML += `<li class = "score_entry">` + entryText + `</li>\n`;
    }
    score_list.innerHTML = newInnerHTML;
}

function startTimer(time){
    // note that "time" is in seconds
    const counter_second_init = 1000/TIMER_DELAY;
    const line_counter_max = time*counter_second_init;  // the maximum value for line width counter

    let counter_second = counter_second_init;           // count to a second for the timer
    counter = setInterval(timer, TIMER_DELAY);

    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        counter_second--;    //decrement the second counter
        if (counter_second <= 0) {
            counter_second = counter_second_init // reset second counter
            time--; //decrement the time value
        }

        // Pnealise the timer when wrong choice is selected
        if (isWrongAnswerSelected) {
            console.log("Falsing isWrongAnswerSelected");
            isWrongAnswerSelected = false;
            time -= INCORRECT_PENALTY;
        }

        // Update the text
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }

        // Update the timer line
        time_line.style.width = parseInt(((time*counter_second_init + counter_second)/line_counter_max) * TIMER_LINE_WIDTH) + "px"; //increasing width of time_line with px by time value while time still go down

        // When timer reaches 0, game over
        if(time < 0){
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Out!"; //change the time text to time off
            const allchoices = choices_list.children.length; //getting all choice items
            let correcAns = questions[que_count].correctAnswer; //getting correct answer from array
            for(i=0; i < allchoices; i++){
                if(choices_list.children[i].textContent == correcAns){ //if there is an choice which is matched to an array answer
                    choices_list.children[i].setAttribute("class", "choice correct"); //adding green color to matched choice
                    choices_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched choice
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allchoices; i++){
                choices_list.children[i].classList.add("disabled"); //once user select an choice then disabled all choices
            }
            next_btn.classList.add("show"); //show the next button if user selected any choice
            conclusion_text.innerHTML = "Quiz is Over!";
            showResult();
        }
    }
}

/* 
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        if (time <= 549) {
            time_line.style.width = (549 - time) + "px"; //increasing width of time_line with px by time value while time still go down
        }
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
 */

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}





