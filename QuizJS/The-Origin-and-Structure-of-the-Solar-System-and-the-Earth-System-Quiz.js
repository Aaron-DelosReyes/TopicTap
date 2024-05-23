
let questions = [
  {
    numb: 1,
    question: "What do creation myths typically aim to explain?",
    answer: "The origins of the universe and the nature of life",
    options: [
      "The purpose of human existence",
      "The origins of the universe and the nature of life",
      "Scientific phenomena",
      "Future predictions"
    ]
  },
  {
    numb: 2,
    question: "What marks the beginning of the universe according to the Big Bang Theory?",
    answer: "A state of nothingness",
    options: [
      "Formation of the Earth",
      "A state of nothingness",
      "Appearance of the first humans",
      "A large meteor impact"
    ]
  },
  {
    numb: 3,
    question: "What does the Steady State Theory propose about the universe?",
    answer: "It remains constant over time.",
    options: [
      "It is constantly expanding and contracting.",
      "It remains constant over time.",
      "It started from a massive explosion.",
      "It will eventually collapse into itself."
    ]
  },
  {
    numb: 4,
    question: "What key event does the Inflation Theory propose occurred before the Big Bang?",
    answer: "Rapid exponential expansion",
    options: [
      "Gradual cooling of the universe",
      "Rapid exponential expansion",
      "Formation of black holes",
      "Increase in cosmic radiation"
    ]
  },
  {
    numb: 5,
    question: "Approximately how many years ago did the solar system form?",
    answer: "4.5 billion years ago",
    options: [
      "2.5 billion years ago",
      "3.5 billion years ago",
      "4.5 billion years ago",
      "5.5 billion years ago"
    ]
  },
  {
    numb: 6,
    question: "In which part of the Milky Way is our solar system located?",
    answer: "Orion Star Cluster",
    options: [
      "Sagittarius Star Cluster",
      "Andromeda Cluster",
      "Orion Star Cluster",
      "Pegasus Star Cluster"
    ]
  },
  {
    numb: 7,
    question: "Which planet is known as the only environment capable of sustaining life?",
    answer: "Earth",
    options: [
      "Mars",
      "Earth",
      "Venus",
      "Mercury"
    ]
  },
  {
    numb: 8,
    question: "Which planet is famous for its extensive ring system?",
    answer: "Saturn",
    options: [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ]
  },
  {
    numb: 9,
    question: "Where is the asteroid belt located?",
    answer: "Between Mars and Jupiter",
    options: [
      "Between Mars and Jupiter",
      "Beyond Neptune",
      "Around the Sun",
      "Near the Earth’s orbit"
    ]
  },
  {
    numb: 10,
    question: "What does the Oort Cloud consist of?",
    answer: "Comets and icy debris",
    options: [
      "Rocky planets",
      "Comets and icy debris",
      "Dust and gas",
      "Stars and galaxies"
    ]
  },
  {
    numb: 11,
    question: "Which of the following is NOT a branch of physical science?",
    answer: "Biology",
    options: [
      "Biology",
      "Geology",
      "Astronomy",
      "Chemistry"
    ]
  },
  {
    numb: 12,
    question: "Which statement best describes Newton's third law of motion?",
    answer: "For every action, there is an equal and opposite reaction.",
    options: [
      "For every action, there is an equal and opposite reaction.",
      "An object at rest stays at rest.",
      "Force equals mass times acceleration.",
      "Energy cannot be created or destroyed."
    ]
  },
  {
    numb: 13,
    question: "Through which medium do sound waves primarily propagate?",
    answer: "Air",
    options: [
      "Vacuum",
      "Solids",
      "Liquids",
      "Air"
    ]
  },
  {
    numb: 14,
    question: "What type of bonds form between adjacent water molecules?",
    answer: "Hydrogen bonds",
    options: [
      "Ionic bonds",
      "Covalent bonds",
      "Hydrogen bonds",
      "Metallic bonds"
    ]
  },
  {
    numb: 15,
    question: "What does the theory of plate tectonics explain?",
    answer: "Movement of Earth's lithospheric plates",
    options: [
      "The formation of stars",
      "Movement of Earth's lithospheric plates",
      "Creation of the universe",
      "Chemical bonding"
    ]
  },
  {
    numb: 16,
    question: "Why is Earth's position in the Goldilocks zone important?",
    answer: "It ensures the presence of liquid water.",
    options: [
      "It prevents solar flares.",
      "It ensures the presence of liquid water.",
      "It stabilizes Earth's magnetic field.",
      "It increases the planet's rotation speed."
    ]
  },
  {
    numb: 17,
    question: "How does Earth's atmosphere contribute to life?",
    answer: "By maintaining a consistent temperature",
    options: [
      "By trapping harmful radiation",
      "By maintaining a consistent temperature",
      "By providing necessary nutrients",
      "By reflecting sunlight"
    ]
  },
  {
    numb: 18,
    question: "Which Earth process is involved in nutrient recycling?",
    answer: "Volcanism",
    options: [
      "Weathering",
      "Erosion",
      "Volcanism",
      "Precipitation"
    ]
  },
  {
    numb: 19,
    question: "Which Earth system includes all living organisms?",
    answer: "Biosphere",
    options: [
      "Atmosphere",
      "Geosphere",
      "Hydrosphere",
      "Biosphere"
    ]
  },
  {
    numb: 20,
    question: "Which of the following fields does NOT contribute to Earth Systems Science?",
    answer: "Literature",
    options: [
      "Ecology",
      "Physics",
      "Astronomy",
      "Literature"
    ]
  },

 
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Hide the quiz box initially
quiz_box.classList.remove("activeQuiz");

// Show the info box when the page loads
info_box.classList.add("activeInfo");

// Continue button click event handler
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // Hide the info box
  quiz_box.classList.add("activeQuiz"); // Show the quiz box
  showQuetions(0); // Display the first question
  queCounter(1); // Update the question counter
  startTimer(15); // Start the timer
  startTimerLine(0); // Start the timer line
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // Hide the info box
}

// Rest of your existing JavaScript code follows...


let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz"); 
  result_box.classList.remove("activeResult");
  timeValue = 15; 
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); 
  queCounter(que_numb); 
  clearInterval(counter);
  clearInterval(counterLine); 
  startTimer(timeValue); 
  startTimerLine(widthValue); 
  timeText.textContent = "Time Left"; 
  next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
  window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){ 
      que_count++;
      que_numb++;
      showQuetions(que_count); 
      queCounter(que_numb); 
      clearInterval(counter); 
      clearInterval(counterLine); 
      startTimer(timeValue); 
      startTimerLine(widthValue); 
      timeText.textContent = "Time Left"; 
      next_btn.classList.remove("show"); 
  }else{
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
  }
}

// getting questions and options from array
function showQuetions(index){
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items
  
  if(userAns == correcAns){ //if user selected option is equal to array's correct answer
      userScore += 1; //upgrading score value with 1
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
  }else{
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      console.log("Wrong Answer");

      for(i=0; i < allOptions; i++){
          if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
              option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
              option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
              console.log("Auto selected correct answer.");
          }
      }
  }
  for(i=0; i < allOptions; i++){
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3){ // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag = '<span>and congrats! You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
  }
  else if(userScore > 1){ // if user scored more than 1
      let scoreTag = '<span>and nice, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;
  }
  else{ // if user scored less than 1
      let scoreTag = '<span>and sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
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
          const allOptions = option_list.children.length; //getting all option items
          let correcAns = questions[que_count].answer; //getting correct answer from array
          for(i=0; i < allOptions; i++){
              if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                  option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                  option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                  console.log("Time Off: Auto selected correct answer.");
              }
          }
          for(i=0; i < allOptions; i++){
              option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
          }
          next_btn.classList.add("show"); //show the next button if user selected any option
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
 
  let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag;  
}
