
let questions = [
    {
        numb: 1,
        question: "What marked the transition from small, nomadic bands of hunter-gatherers to larger, agricultural settlements and early civilization?",
        answer: "Neolithic Revolution",
        options: [
          "Industrial Revolution",
          "Bronze Age",
          "Neolithic Revolution",
          "Enlightenment"
        ]
      },
      {
        numb: 2,
        question: "What is another name for the Neolithic Revolution?",
        answer: "Agricultural Revolution",
        options: [
          "Industrial Revolution",
          "Agricultural Revolution",
          "Technological Revolution",
          "Cultural Revolution"
        ]
      },
      {
        numb: 3,
        question: "What were some of the crops domesticated during the Neolithic Revolution?",
        answer: "Emmer wheat, einkorn wheat, barley, lentils, chickpeas, peas, flax",
        options: [
          "Potatoes, tomatoes, corn, rice, soybeans",
          "Emmer wheat, einkorn wheat, barley, lentils, chickpeas, peas, flax",
          "Apples, oranges, bananas, grapes, strawberries",
          "Wheat, oats, rye, corn, barley, rice"
        ]
      },
      {
        numb: 4,
        question: "Where did the Neolithic Revolution take place in Africa?",
        answer: "Nabta Playa, Eastern Sahara, and Southern Egypt",
        options: [
          "Serengeti, Congo Basin, and Kalahari Desert",
          "Nabta Playa, Eastern Sahara, and Southern Egypt",
          "Mount Kilimanjaro, Great Rift Valley, and Lake Victoria",
          "Sahel, Horn of Africa, and Swahili Coast"
        ]
      },
      {
        numb: 5,
        question: "What area in Europe saw the transition from foraging to farming during the Neolithic Revolution?",
        answer: "Mediterranean shores (Greece, Italy, France)",
        options: [
          "Scandinavia",
          "British Isles",
          "Mediterranean shores (Greece, Italy, France)",
          "Eastern Europe"
        ]
      },
      {
        numb: 6,
        question: "What was the first crop China developed farming based on during the Neolithic Revolution?",
        answer: "Millet rice",
        options: [
          "Wheat",
          "Rice",
          "Millet rice",
          "Maize"
        ]
      },
      {
        numb: 7,
        question: "What river is often called the 'Mother River' and 'Cradle of Chinese Civilization'?",
        answer: "Yellow River",
        options: [
          "Yangtze River",
          "Yellow River",
          "Pearl River",
          "Huai River"
        ]
      },
      {
        numb: 8,
        question: "What was the nickname for the Indus Valley Civilization?",
        answer: "Harappan Civilization",
        options: [
          "Mohenjo-Daro Civilization",
          "Ganges Civilization",
          "Indo-Aryan Civilization",
          "Harappan Civilization"
        ]
      },
      {
        numb: 9,
        question: "What is the name of the valley where the Indus Valley Civilization was located?",
        answer: "Indus River Valley",
        options: [
          "Ganges River Valley",
          "Tigris River Valley",
          "Euphrates River Valley",
          "Indus River Valley"
        ]
      },
      {
        numb: 10,
        question: "Which civilization is often referred to as the 'Gift of Nile'?",
        answer: "Ancient Egypt",
        options: [
          "Mesopotamia",
          "Indus Valley Civilization",
          "Ancient Egypt",
          "Yellow River Civilization"
        ]
      },
      {
        numb: 11,
        question: "Which river is associated with the Mesopotamian Civilization?",
        answer: "Tigris-Euphrates",
        options: [
          "Nile",
          "Tigris-Euphrates",
          "Indus",
          "Yellow River"
        ]
      },
      {
        numb: 12,
        question: "What was the world's oldest known written language?",
        answer: "Sumerian",
        options: [
          "Egyptian",
          "Sumerian",
          "Greek",
          "Latin"
        ]
      },
      {
        numb: 13,
        question: "What is one of the legacies of Roman dominance?",
        answer: "Widespread use of Romance languages",
        options: [
          "Widespread use of Germanic languages",
          "Widespread use of Slavic languages",
          "Widespread use of Arabic languages",
          "Widespread use of Romance languages"
        ]
      },
      {
        numb: 14,
        question: "What is a feature of civilizations that describes a complex way of life with urban settlements?",
        answer: "Cities",
        options: [
          "Villages",
          "Tribes",
          "Cities",
          "Hunting grounds"
        ]
      },
      {
        numb: 15,
        question: "What allows civilizations to record their own history and everyday events?",
        answer: "Writings",
        options: [
          "Paintings",
          "Sculptures",
          "Writings",
          "Oral tradition"
        ]
      },
      {
        numb: 16,
        question: "What feature of civilizations is marked by different people performing specialized tasks?",
        answer: "Specialization",
        options: [
          "Diversification",
          "Generalization",
          "Specialization",
          "Standardization"
        ]
      },
      {
        numb: 17,
        question: "What is the function of government in civilizations?",
        answer: "Making and enforcing decisions, maintaining order, collecting taxes",
        options: [
          "Creating art, promoting culture, organizing festivals",
          "Making and enforcing decisions, maintaining order, collecting taxes",
          "Performing rituals, overseeing religion, conducting trade",
          "Providing education, healthcare, and social services"
        ]
      },
      {
        numb: 18,
        question: "What gives rulers authority in civilizations?",
        answer: "Religion",
        options: [
          "Military power",
          "Economic wealth",
          "Religion",
          "Democratic elections"
        ]
      },
      {
        numb: 19,
        question: "What process is defined as the expansion of democracy within a state or across the world?",
        answer: "Democratization",
        options: [
          "Debilitation",
          "Decentralization",
          "Deliberation",
          "Democratization"
        ]
      },
      {
        numb: 20,
        question: "What Greek word does 'Democracy' originate from?",
        answer: "DEMOKRATIA",
        options: [
          "THEOS",
          "LOGOS",
          "DEMOKRATIA",
          "TECHNE"
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
  