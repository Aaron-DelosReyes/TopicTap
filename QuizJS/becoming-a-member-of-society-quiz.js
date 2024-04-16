
let questions = [
    {
        numb: 1,
        question: "What is enculturation?",
        answer: "The process of learning one's surrounding culture and acquiring its values",
        options: [
          "The process of learning societal norms",
          "The process of learning one's surrounding culture and acquiring its values",
          "The process of formal education",
          "The process of adapting to group behavior"
        ]
      },
      {
        numb: 2,
        question: "Which stage of enculturation involves unconscious internalization of culture?",
        answer: "Early stage",
        options: [
          "Formal stage",
          "Conscious stage",
          "Early stage",
          "Informal stage"
        ]
      },
      {
        numb: 3,
        question: "What is the main difference between socialization and enculturation?",
        answer: "Socialization is about learning societal norms, while enculturation is about adopting cultural behaviors.",
        options: [
          "Enculturation focuses on individual behaviors, while socialization focuses on group behaviors.",
          "Socialization is specific to culture, while enculturation is specific to society.",
          "Socialization is about learning societal norms, while enculturation is about adopting cultural behaviors.",
          "Socialization applies to children, while enculturation applies to adults."
        ]
      },
      {
        numb: 4,
        question: "According to Grunland and Mayers (1998), what are the two major aspects of enculturation?",
        answer: "Formal and informal",
        options: [
          "Formal and informal",
          "Early and late",
          "Individual and collective",
          "Cultural and societal"
        ]
      },
      {
        numb: 5,
        question: "What is socialization?",
        answer: "The process of learning societal norms and practices",
        options: [
          "The process of adapting to group behavior",
          "The process of learning societal norms and practices",
          "The process of forming personal identity",
          "The process of cultural adaptation"
        ]
      },
      {
        numb: 6,
        question: "Who described identity formation extensively in his theory of developmental stages?",
        answer: "Erik Erikson",
        options: [
          "Erik Erikson",
          "Sigmund Freud",
          "Jean Piaget",
          "Lawrence Kohlberg"
        ]
      },
      {
        numb: 7,
        question: "Which type of identity refers to the qualities of a person or group that make them different from others?",
        answer: "Personal identity",
        options: [
          "Social identity",
          "Personal identity",
          "Cultural identity",
          "Collective identity"
        ]
      },
      {
        numb: 8,
        question: "What are norms?",
        answer: "Social rules specifying appropriate behavior",
        options: [
          "Abstract concepts of what is good or bad",
          "Social rules specifying appropriate behavior",
          "Personal beliefs and values",
          "Formal laws enforced by society"
        ]
      },
      {
        numb: 9,
        question: "What is the main difference between folkways and mores?",
        answer: "Folkways are everyday norms, while mores are fundamental principles.",
        options: [
          "Folkways are formal laws, while mores are informal rules.",
          "Folkways are everyday norms, while mores are fundamental principles.",
          "Folkways are learned through observation, while mores are explicitly taught.",
          "Folkways are enforced by the government, while mores are enforced by communities."
        ]
      },
      {
        numb: 10,
        question: "What is the difference between achieved status and ascribed status?",
        answer: "Achieved status is earned, while ascribed status is assigned.",
        options: [
          "Achieved status is earned, while ascribed status is assigned.",
          "Achieved status is fixed, while ascribed status is flexible.",
          "Achieved status is determined at birth, while ascribed status is determined later in life.",
          "Achieved status is based on personal characteristics, while ascribed status is based on societal roles."
        ]
      },
      {
        numb: 11,
        question: "What is a master status?",
        answer: "A status that carries primary weight in personal interaction",
        options: [
          "A status that reflects a person's skills and abilities",
          "A status that carries primary weight in personal interaction",
          "A status that is achieved through formal education",
          "A status that changes throughout one's life"
        ]
      },
      {
        numb: 12,
        question: "What is conformity?",
        answer: "Compliance with standards, rules, or laws",
        options: [
          "Compliance with standards, rules, or laws",
          "Violation of cultural norms",
          "Acceptance of minority opinions",
          "Rejection of societal expectations"
        ]
      },
      {
        numb: 13,
        question: "What is deviance?",
        answer: "Behavior that violates cultural norms",
        options: [
          "Conformity to societal norms",
          "Compliance with group standards",
          "Behavior that violates cultural norms",
          "Acceptance of social roles"
        ]
      },
      {
        numb: 14,
        question: "Which type of deviance includes criminal violations?",
        answer: "Criminal deviance",
        options: [
          "Physical deviance",
          "Sexual deviance",
          "Cyber deviance",
          "Criminal deviance"
        ]
      },
      {
        numb: 15,
        question: "What are informal social sanctions?",
        answer: "Unspoken rules known by a community",
        options: [
          "Rules enforced by the government",
          "Official laws and regulations",
          "Unspoken rules known by a community",
          "Formal procedures for social control"
        ]
      },
      {
        numb: 16,
        question: "What are the bases of fundamental human rights according to the 1987 Philippine Constitution?",
        answer: "ARTICLE III - XXII",
        options: [
          "ARTICLE I - III",
          "ARTICLE II - XXII",
          "ARTICLE III - XXII",
          "ARTICLE IV - XXII"
        ]
      },
      {
        numb: 17,
        question: "Which section of the Philippine Constitution discusses the right to freedom of speech?",
        answer: "Section 4",
        options: [
          "Section 1",
          "Section 4",
          "Section 8",
          "Section 12"
        ]
      },
      {
        numb: 18,
        question: "What is human dignity?",
        answer: "The inherent worth of every individual",
        options: [
          "The right to privacy",
          "The right to freedom of speech",
          "The inherent worth of every individual",
          "The right to due process of law"
        ]
      },
      {
        numb: 19,
        question: "What are human rights?",
        answer: "Inherent freedoms and entitlements of individuals",
        options: [
          "Legal protections provided by the government",
          "Collective beliefs and values",
          "Inherent freedoms and entitlements of individuals",
          "Social norms and expectations"
        ]
      },
      {
        numb: 20,
        question: "What is the common good?",
        answer: "The interest of the majority",
        options: [
          "The interest of the majority",
          "The pursuit of individual happiness",
          "The protection of personal freedoms",
          "The promotion of cultural diversity"
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
  