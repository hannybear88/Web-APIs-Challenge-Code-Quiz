const question = document.getElementById("questions");
const choice = Array.from(document.getElementsbyClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    number: 1,
    question: "Arrays in JavaScript can be used to store ________.",
    choice: {
        A: 'Numbers and Strings',
        B: 'Other Arrays',
        C: 'Booleans',
        D: 'All of the Above',
    },
    correctAnswer: 'D'
},
    {
    number: 2, 
    question: "String Values must be enclosed with _______ when being assigned to variables.",
    choice: {
        A: 'Commas',
        B: 'Curly Brackets',
        C: 'Quotes', 
        D: 'Parenthesis',
    },
    correctAnswer: 'Quotes',
},
    {
    number: 3, 
    question: "Commonly used data types DO NOT include:",
    choice: {
        A: 'Strings',
        B: 'Booleans',
        C: 'Alerts',
        D: 'Numbers',
    },
    correctAnswer: 'Alerts',
},
    {
    number: 4, 
    question: "A very useful tool use during development and debugging for printing content to the debugger is:",
    choice: {
        A: 'JavaScript',
        B: 'Terminal/Bash',
        C: 'For Loops',
        D: 'Console.Log',
    },
    correctAnswer: 'Console.Log',
 },
    {
    number: 5, 
    question: "The condition in an if / else statement is enclosed with ___________. ",
    choice: {
        A: 'Quotes',
        B: 'Curly Brackets',
        C: 'Parenthesis',
        D: 'Square Brackets',
            },
    correctAnswer: 'Parenthesis',
},

    {
    number: 6, 
    question: "Which of the following two CSS properties are used to set an HTML element’s foreground color and background color, respectively?",
    choice: {
        A: 'Foreground-Color and Background-Color',
        B: 'Color and Background-Color',
        C: 'Color-Foreground and Color-Background',
        D: 'Color-Font and Color-Back',
    correctAnswer: 'Color and Background-Color',
    },
},
    {
    number: 7, 
    question: "What is the correct definition of an HTML element?",
   choice: {
        A: 'The first, or opening, HTML tag',
        B: 'HTML code that does not requir opening or closing tags',
        C: 'An HTML tag adn the content that it contains or marks up',
        D: 'The second, or closing, HTML tag. Closing tags have a forward slash (/) inside of them.',
   },
    correctAnswer: 'An HTML tag and the content that it contains or marks up',
},
    {
    number: 8, 
    question: "What is a directory?",
    choice: {
        A: 'A folder used to store files.',
        B: 'A Tree Structure',
        C: 'A command to a computer',
        D: 'A file',
    },
    correctAnswer: 'A folder used to store files.',
    
},
    {
    number: 9, 
    question: "What does API stand for?",
    choice: {
        A: 'Application Processes Integration',
        B: 'Application Programming Interface',
        C: 'Application Platform Interface',
        D: 'Application Programmer Interface',
    },
    correctAnswer: 'Application Programming Interface',
},
    {
    number: 10, 
    question: "S What does CSS stand for?",
    choice: {
        A: 'Computer Systems Support',
        B: 'Custom Style Sheet',
        C: 'Computer SoftwareServices',
        D: 'Cascading Style Sheet',
    },
    correctAnswer: 'Cascading Style Sheet',
    }
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = avialableQuestins[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.ForEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        })  
};