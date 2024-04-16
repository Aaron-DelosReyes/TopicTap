
let questions = [
    {
        numb: 1,
        question: "What is society?",
        answer: "Collection of interacting individuals sharing the same way of life and living in the same territory.",
        options: [
          "A group of people with different cultures.",
          "A collection of individuals with similar beliefs.",
          "A community with diverse backgrounds.",
          "Collection of interacting individuals sharing the same way of life and living in the same territory."
        ]
      },
      {
        numb: 2,
        question: "What is the primary difference between ascribed status and achieved status?",
        answer: "Ascribed status is assigned at birth, while achieved status is gained through individual effort.",
        options: [
          "Ascribed status is based on education, while achieved status is based on family relationships.",
          "Ascribed status is gained through competition, while achieved status is assigned at birth.",
          "Ascribed status is assigned at birth, while achieved status is gained through individual effort.",
          "Ascribed status is based on occupation, while achieved status is based on age."
        ]
      },
      {
        numb: 3,
        question: "What is culture?",
        answer: "Culture consists of all the shared products of human beings.",
        options: [
          "The physical environment where people live.",
          "The political system of a society.",
          "The economic structure of a community.",
          "Culture consists of all the shared products of human beings."
        ]
      },
      {
        numb: 4,
        question: "What is the primary characteristic of culture?",
        answer: "Dynamic, Flexible, & Adaptive",
        options: [
          "Stable and unchanging",
          "Rigid and inflexible",
          "Dynamic, Flexible, & Adaptive",
          "Authoritarian and controlling"
        ]
      },
      {
        numb: 5,
        question: "What is a culture trait?",
        answer: "The smallest unit of culture.",
        options: [
          "A cluster of interrelated traits.",
          "The largest unit of culture.",
          "A broad cultural pattern.",
          "The smallest unit of culture."
        ]
      },
      {
        numb: 6,
        question: "What is the difference between ethnocentrism and xenocentrism?",
        answer: "Ethnocentrism believes one's own culture is superior, while xenocentrism believes other cultures are superior.",
        options: [
          "Ethnocentrism believes other cultures are superior, while xenocentrism believes one's own culture is superior.",
          "Ethnocentrism believes all cultures are equal, while xenocentrism believes in cultural superiority.",
          "Ethnocentrism believes in cultural diversity, while xenocentrism believes in cultural homogeneity.",
          "Ethnocentrism believes one's own culture is superior, while xenocentrism believes other cultures are superior."
        ]
      },
      {
        numb: 7,
        question: "What is cultural relativism?",
        answer: "The ability to understand a culture on its own terms without making judgments based on one's own culture.",
        options: [
          "The belief that one's own culture is superior to others.",
          "The belief that all cultures are equal.",
          "The ability to understand a culture on its own terms without making judgments based on one's own culture.",
          "The belief that cultural practices should be questioned and criticized."
        ]
      },
      {
        numb: 8,
        question: "What is the primary goal of cultural relativism?",
        answer: "To promote an understanding of cultural practices without imposing one's own cultural standards.",
        options: [
          "To prove the superiority of one's own culture over others.",
          "To eliminate cultural diversity and establish a global culture.",
          "To promote an understanding of cultural practices without imposing one's own cultural standards.",
          "To enforce cultural practices through legislation and force."
        ]
      },
      {
        numb: 9,
        question: "What is xenocentrism?",
        answer: "The belief that one's own culture is inferior to those of other peoples.",
        options: [
          "The belief that all cultures are equal.",
          "The belief that one's own culture is superior to others.",
          "The belief that cultural diversity is detrimental to society.",
          "The belief that one's own culture is inferior to those of other peoples."
        ]
      },
      {
        numb: 10,
        question: "What is an example of achieved status?",
        answer: "Occupation",
        options: [
          "Age",
          "Gender",
          "Race",
          "Occupation"
        ]
      },
      {
        numb: 11,
        question: "What is an example of material culture?",
        answer: "Mobile phones",
        options: [
          "Language",
          "Beliefs",
          "Ideas",
          "Mobile phones"
        ]
      },
      {
        numb: 12,
        question: "What is a culture universal?",
        answer: "An element, pattern, trait, or institution that is common to all human cultures worldwide.",
        options: [
          "A cultural practice unique to a specific culture.",
          "A cultural value shared by only a few cultures.",
          "An element, pattern, trait, or institution that is common to all human cultures worldwide.",
          "A cultural artifact with historical significance."
        ]
      },
      {
        numb: 13,
        question: "What is the difference between absolute and critical cultural relativism?",
        answer: "Absolute cultural relativism believes everything within a culture must not be questioned, while critical cultural relativism questions cultural practices in terms of who is accepting them and why.",
        options: [
          "Absolute cultural relativism questions cultural practices, while critical cultural relativism accepts them without question.",
          "Absolute cultural relativism believes all cultures are equal, while critical cultural relativism believes in cultural diversity.",
          "Absolute cultural relativism believes in cultural diversity, while critical cultural relativism believes in cultural homogeneity.",
          "Absolute cultural relativism believes everything within a culture must not be questioned, while critical cultural relativism questions cultural practices in terms of who is accepting them and why."
        ]
      },
      {
        numb: 14,
        question: "What is the primary function of a role in society?",
        answer: "A comprehensive pattern of behavior that provides a means of identifying and placing an individual in society.",
        options: [
          "A system of beliefs and values shared by a group of people.",
          "A set of rules governing social interactions.",
          "A comprehensive pattern of behavior that provides a means of identifying and placing an individual in society.",
          "A mechanism for enforcing cultural norms."
        ]
      },
      {
        numb: 15,
        question: "What is a culture complex?",
        answer: "Individual culture traits combine to form culture complexes.",
        options: [
          "A comprehensive pattern of behavior that identifies a person's social status.",
          "A set of beliefs and values shared by a group of people.",
          "A collection of material objects created by a society.",
          "Individual culture traits combine to form culture complexes."
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
  