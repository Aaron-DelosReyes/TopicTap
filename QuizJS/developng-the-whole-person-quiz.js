
let questions = [

    {
        numb: 1,
        question: "What are the three basic aspects of the self?",
        answer: "Physical, intellectual, and emotional",
        options: [
          "Physical, spiritual, and emotional",
          "Physical, intellectual, and emotional",
          "Mental, physical, and spiritual",
          "Emotional, spiritual, and intellectual"
        ]
      },
      {
        numb: 2,
        question: "What aspect of the self is most commonly emphasized by individuals?",
        answer: "The physical aspect",
        options: [
          "The intellectual aspect",
          "The emotional aspect",
          "The spiritual aspect",
          "The physical aspect"
        ]
      },
      {
        numb: 3,
        question: "What role does the mind play in relation to the other aspects of the self?",
        answer: "It directs the other two aspects",
        options: [
          "It houses the spirit",
          "It responds with feelings",
          "It directs the other two aspects",
          "It is tangible and obvious"
        ]
      },
      {
        numb: 4,
        question: "What is a consequence of not managing negative emotions?",
        answer: "They are stored and repressed",
        options: [
          "They lead to physical illness",
          "They are stored and repressed",
          "They enhance creativity",
          "They strengthen the body"
        ]
      },
      {
        numb: 5,
        question: "How can an individual improve their intellectual self according to the provided text?",
        answer: "By planning effective actions and seeking help",
        options: [
          "By planning effective actions and seeking help",
          "By focusing on physical fitness",
          "By ignoring emotional stress",
          "By spending more money on the physical aspect"
        ]
      },
      {
        numb: 6,
        question: "In 'The Story of the Two Wolves,' what determines which wolf will win?",
        answer: "The one you feed",
        options: [
          "The stronger wolf",
          "The one you feed",
          "The one with more friends",
          "The one with better instincts"
        ]
      },
      {
        numb: 7,
        question: "What does the 'The Story of the Two Wolves' suggest about controlling our own thoughts, feelings, and actions?",
        answer: "We have the ability to decide which wolf to feed",
        options: [
          "We are powerless to control them",
          "Only external events can control them",
          "We have the ability to decide which wolf to feed",
          "They are controlled by our physical health"
        ]
      },
      {
        numb: 8,
        question: "What is implied by the concept that the mind consists of different parts?",
        answer: "These parts can interact and be in conflict with each other",
        options: [
          "The mind is a unitary entity",
          "The parts always work harmoniously",
          "These parts can interact and be in conflict with each other",
          "The parts of the mind do not affect behavior"
        ]
      },
      {
        numb: 9,
        question: "What does the story suggest is the first step toward managing your mind?",
        answer: "Recognizing you have control over your own self",
        options: [
          "Ignoring negative thoughts",
          "Recognizing you have control over your own self",
          "Following the instincts of the positive wolf",
          "Seeking external validation"
        ]
      },
      {
        numb: 10,
        question: "According to the text, why is managing feelings difficult?",
        answer: "Feelings are elusive and deceptive",
        options: [
          "They are easy to control",
          "Feelings are elusive and deceptive",
          "They are always negative",
          "They are tangible and obvious"
        ]
      },
      {
        numb: 11,
        question: "How does the mind communicate with the body and feelings?",
        answer: "Through beliefs and thoughts",
        options: [
          "Through beliefs and thoughts",
          "Through physical actions",
          "Through emotional stress",
          "Through external events"
        ]
      },
      {
        numb: 12,
        question: "What happens to emotions that are not managed according to the text?",
        answer: "They become repressed",
        options: [
          "They become repressed",
          "They enhance creativity",
          "They disappear",
          "They strengthen the body"
        ]
      },
      {
        numb: 13,
        question: "What is the effect of repression on the self?",
        answer: "It is destructive to a content self",
        options: [
          "It is beneficial for creativity",
          "It enhances physical health",
          "It is destructive to a content self",
          "It leads to better decision-making"
        ]
      },
      {
        numb: 14,
        question: "What does the story of the two wolves help individuals realize?",
        answer: "They can control their thoughts, feelings, and actions",
        options: [
          "They are controlled by external events",
          "They can control their thoughts, feelings, and actions",
          "They must ignore their emotions",
          "They should focus solely on the physical aspect"
        ]
      },
      {
        numb: 15,
        question: "What should one do to better manage the mind, feelings, and actions?",
        answer: "Consciously feed the good wolf",
        options: [
          "Consciously feed the good wolf",
          "Ignore the negative wolf",
          "Focus only on the physical aspect",
          "Rely on external validation"
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
  