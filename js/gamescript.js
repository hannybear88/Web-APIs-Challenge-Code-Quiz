const question = document.getElementById("questions");
const choices = Array.from(document.getElementsbyClassName("choices-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: "Arrays in JavaScript can be used to store ________.",
    choice: {
        choice1: 'A. Numbers and Strings',
        choice2: 'B. Other Arrays',
        choice3: 'C. Booleans',
        choice4: 'D. All of the Above',
    },
    correctAnswer: 4 // 'D. All of the Above'
},
    {
    question: "String Values must be enclosed with _______ when being assigned to variables.",
    choice: {
        choice1: 'A. Commas',
        choice2: 'B. Curly Brackets',
        choice3: 'C. Quotes', 
        choice4: 'D. Parenthesis',
    },
    correctAnswer: 3 //'C. Quotes',
},
    {
    question: "Commonly used data types DO NOT include:",
    choice: {
        choice1: 'A. Strings',
        choice2: 'B. Booleans',
        choice3: 'C. Alerts',
        choice4: 'D. Numbers',
    },
    correctAnswer: 3 // 'C. Alerts',
},
    {
    question: "A very useful tool use during development and debugging for printing content to the debugger is:",
    choice: {
        choice1: 'A. JavaScript',
        choice2: 'B. Terminal/Bash',
        choice3: 'C. For Loops',
        choice4: 'D. Console.Log',
    },
    correctAnswer: 4 // 'D. Console.Log',
 },
    {
    question: "The condition in an if / else statement is enclosed with ___________. ",
    choice: {
        choice1: 'A. Quotes',
        choice2: 'B. Curly Brackets',
        choice3: 'C. Parenthesis',
        choice4: 'D. Square Brackets',
            },
    correctAnswer: 3 // 'C. Parenthesis',
},

    {
    question: "Which of the following two CSS properties are used to set an HTML element’s foreground color and background color, respectively?",
    choice: {
        choice1: 'A. Foreground-Color and Background-Color',
        choice2: 'B. Color and Background-Color',
        choice3: 'C. Color-Foreground and Color-Background',
        choice4: 'D. Color-Font and Color-Back',
    correctAnswer: 2 // 'B. Color and Background-Color',
    },
},
    {
    question: "What is the correct definition of an HTML element?",
   choice: {
        choice1: 'A. The first, or opening, HTML tag',
        choice2: 'B. HTML code that does not requir opening or closing tags',
        choice3: 'C. An HTML tag adn the content that it contains or marks up',
        choice4: 'D. The second, or closing, HTML tag. Closing tags have a forward slash (/) inside of them.',
   },
    correctAnswer: 3 // 'C. An HTML tag and the content that it contains or marks up',
},
    {
    question: "What is a directory?",
    choice: {
        choice1: 'A. A folder used to store files.',
        choice2: 'B. A Tree Structure',
        choice3: 'C. A command to a computer',
        choice4: 'D. A file',
    },
    correctAnswer: 1 // 'A. A folder used to store files.',
    
},
    {
    question: "What does API stand for?",
    choice: {
        choice1: 'A. Application Processes Integration',
        choice2: 'B. Application Programming Interface',
        choice3: 'C. Application Platform Interface',
        choice4: 'D. Application Programmer Interface',
    },
    correctAnswer: 2 //'B. Application Programming Interface',
},
    {
    question: "S What does CSS stand for?",
    choice: {
        choice1: 'A. Computer Systems Support',
        choice2: 'B. Custom Style Sheet',
        choice3: 'C. Computer SoftwareServices',
        choice4: 'D. Cascading Style Sheet',
    },
    correctAnswer:4 // 'D. Cascading Style Sheet',
    }
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    getNewQuestion();
};

getNewQuestion = () => {
            if(availableQuestions.length === 0 || questionsCounter >= MAX_QUESTIONS) {
        //go to the end of the page
        return window.location.assign("/end.html");
            }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestoins.length);
    currentQuestion = avaialableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach (choice => {
    choice.addEventListen("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChocie.dataset["number"];

        const classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }
      // const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        // console.log(selectedAnswer == currentQuestion.answer);

         selectedChoice.parentElement.classList.add(classToApply);
        
         setTimeout() => {
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
        }, 1000)
    });
});



startGame();  
       

        