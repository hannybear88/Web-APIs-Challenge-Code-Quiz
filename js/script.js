




// //Gathering all rquired elements
// const begin_btn = document.querySelector(".begin_btn button");
// const quiz_rules_box = document.querySelector(".quiz_rules_box button");
// const leave_btn = quiz_rules_box.querySelector(".buttons .quit");
// const continue_btn = document.querySelector(".buttons .restart");

// //If User Clicks Begin Quiz Button
// begin_btn.onclick = ()=>{
//     quiz_rules_box.classList.add("activeInfo"); // Infi Box is Shown
// }

// //If User Clicks Leave Button
// leave_btn.onclick = ()=>{
//     quiz_rules_box.classList.remove("activeInfo"); //Info Box is Hidden
// }




//selecting all required elements
const begin_btn = document.querySelector(".begin_btn button");
const quiz_rules_box = document.querySelector(".quiz_rules_box");
const leave_btn = quiz_rules_box.querySelector(".buttons .leave");
const continue_btn = quiz_rules_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const final_score_box = document.querySelector(".final_score_box");
const choices_list = document.querySelector(".choices_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .ticktock_text");
const timeCount = document.querySelector(".timer ticktock_seconds");
// if startQuiz button clicked
begin_btn.onclick = ()=>{
    quiz_rules_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
leave_btn.onclick = ()=>{
    quiz_rules_box.classList.remove("activeInfo"); //hide info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    quiz_rules_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = final_score_box.querySelector(".buttons .restart");
const quit_quiz = final_score_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    final_score_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// getting questions and choices from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and choice and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let choice_tag = '<div class="choice"><span>'+ questions[index].choices[0] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[1] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[2] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    choices_list.innerHTML = choice_tag; //adding new div tag inside choice_tag
    
    const choice = choices_list.querySelectorAll(".choice");
    // set onclick attribute to all available choices
    for(i=0; i < choice.length; i++){
        choice[i].setAttribute("onclick", "choiceselected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on choice
function choiceselected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected choice
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allchoices = choices_list.children.length; //getting all choice items
    
    if(userAns == correcAns){ //if user selected choice is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected choice
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected choice
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected choice
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected choice
        console.log("Wrong Answer");
        for(i=0; i < allchoices; i++){
            if(choices_list.children[i].textContent == correcAns){ //if there is an choice which is matched to an array answer 
                choices_list.children[i].setAttribute("class", "choice correct"); //adding green color to matched choice
                choices_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched choice
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allchoices; i++){
        choices_list.children[i].classList.add("disabled"); //once user select an choice then disabled all choices
    }
    next_btn.classList.add("show"); //show the next button if user selected any choice
}
function showResult(){
    quiz_rules_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    final_score_box.classList.add("activeResult"); //show result box
    const scoreText = final_score_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allchoices = choices_list.children.length; //getting all choice items
            let correcAns = questions[que_count].answer; //getting correct answer from array
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
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}