
let questions = [
    {
        numb: 1,
        question: "What is communication?",
        answer: "A process by which information is exchanged between individuals through a common system, signs, or behavior",
        options: [
          "A process by which information is exchanged between individuals through a common system, signs, or behavior",
          "The act of writing a message",
          "Only verbal interactions between people",
          "The use of technology to convey messages"
        ]
      },
      {
        numb: 2,
        question: "What are the two basic types of communication?",
        answer: "Verbal and Non-Verbal",
        options: [
          "Oral and Written",
          "Verbal and Non-Verbal",
          "Direct and Indirect",
          "Formal and Informal"
        ]
      },
      {
        numb: 3,
        question: "Which of the following is NOT an example of non-verbal communication?",
        answer: "Written communication",
        options: [
          "Signs and symbols",
          "Gestures and body language",
          "Facial expressions",
          "Written communication"
        ]
      },
      {
        numb: 4,
        question: "What is the role of the 'source' in communication?",
        answer: "The person (or thing) attempting to share information",
        options: [
          "The person (or thing) attempting to share information",
          "The medium through which information is sent",
          "The message being communicated",
          "The feedback received"
        ]
      },
      {
        numb: 5,
        question: "What does 'encoding' refer to in the communication process?",
        answer: "The process of assembling the message into a representative design",
        options: [
          "The process of assembling the message into a representative design",
          "The interpretation of the message by the receiver",
          "The medium used to send the message",
          "The feedback provided by the receiver"
        ]
      },
      {
        numb: 6,
        question: "When is communication established?",
        answer: "When both the source and the receiver understand the same information",
        options: [
          "When both the source and the receiver understand the same information",
          "When the message is sent",
          "When the receiver responds",
          "When the source decides to send a message"
        ]
      },
      {
        numb: 7,
        question: "What is the 'channel' in the communication process?",
        answer: "The medium through which an encoded message is conveyed",
        options: [
          "The feedback received",
          "The medium through which an encoded message is conveyed",
          "The source of the message",
          "The receiver of the message"
        ]
      },
      {
        numb: 8,
        question: "What is the difference between feedback and response?",
        answer: "Feedback is a critical assessment of information produced, while response is an answer or reply",
        options: [
          "Feedback is a critical assessment of information produced, while response is an answer or reply",
          "Feedback is immediate, while response is delayed",
          "Feedback is always positive, while response is always negative",
          "Feedback is verbal, while response is non-verbal"
        ]
      },
      {
        numb: 9,
        question: "What was the original means of mass communication?",
        answer: "Print - magazines, journals, and newspapers",
        options: [
          "Print - magazines, journals, and newspapers",
          "Radio",
          "Television",
          "The Internet"
        ]
      },
      {
        numb: 10,
        question: "What does media literacy aim to achieve?",
        answer: "Empower citizens with the competencies to engage with traditional media and new technologies",
        options: [
          "Limit access to media content",
          "Empower citizens with the competencies to engage with traditional media and new technologies",
          "Promote a single viewpoint",
          "Eliminate the use of digital media"
        ]
      },
      {
        numb: 11,
        question: "What is information literacy?",
        answer: "The ability to recognize when information is needed and to locate, evaluate, and effectively communicate information",
        options: [
          "The ability to recognize when information is needed and to locate, evaluate, and effectively communicate information",
          "The use of digital tools to create content",
          "The understanding of mass communication processes",
          "The ability to write and publish articles"
        ]
      },
      {
        numb: 12,
        question: "How does technology literacy benefit an individual?",
        answer: "By enabling them to responsibly and effectively use technological tools",
        options: [
          "By making them experts in one specific technology",
          "By enabling them to responsibly and effectively use technological tools",
          "By limiting their access to new technologies",
          "By teaching them to avoid digital media"
        ]
      },
      {
        numb: 13,
        question: "What question does media and information literacy aim to answer?",
        answer: "How can we access, search, critically assess, use, and contribute content wisely?",
        options: [
          "How can we access, search, critically assess, use, and contribute content wisely?",
          "How can we avoid all media content?",
          "How can we promote a single perspective?",
          "How can we restrict access to information?"
        ]
      },
      {
        numb: 14,
        question: "What is a key skill of a media literate person?",
        answer: "Developing independent judgments about media content",
        options: [
          "Developing independent judgments about media content",
          "Avoiding media consumption",
          "Promoting one-sided arguments",
          "Ignoring media messages"
        ]
      },
      {
        numb: 15,
        question: "What is critical thinking in the context of media literacy?",
        answer: "The ability to evaluate the merit of information based on certain standards or parameters",
        options: [
          "The ability to evaluate the merit of information based on certain standards or parameters",
          "The ability to agree with all media messages",
          "The skill of quickly producing media content",
          "The talent for memorizing media facts"
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
  