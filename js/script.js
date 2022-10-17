//Gathering all rquired elements
const begin_btn = document.querySelector(".begin_btn button");
const quiz_rules_box = document.querySelector(".quiz_rules_box button");
const leave_btn = quiz_rules_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");

//If User Clicks Begin Quiz Button
begin_btn.onclick = ()=>{
    quiz_rules_box.classList.add("activeInfo"); // Infi Box is Shown
}

//If User Clicks Leave Button
leave_btn.onclick = ()=>{
    quiz_rules_box.classList.remove("activeInfo"); //Info Box is Hidden
}