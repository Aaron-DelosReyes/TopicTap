
let questions = [

    {
        numb: 1,
        question: "What is the key ingredient for improving relationships according to 'Encouragement 101'?",
        answer: "Encouragement",
        options: [
          "Praise",
          "Criticism",
          "Encouragement",
          "Punishment"
        ]
      },
      {
        numb: 2,
        question: "Who developed the psychological idea of encouragement?",
        answer: "Alfred Adler",
        options: [
          "Sigmund Freud",
          "Carl Jung",
          "Alfred Adler",
          "B.F. Skinner"
        ]
      },
      {
        numb: 3,
        question: "What is often mistaken for encouragement?",
        answer: "Praise",
        options: [
          "Punishment",
          "Criticism",
          "Praise",
          "Bribery"
        ]
      },
      {
        numb: 4,
        question: "What does encouragement develop in a person?",
        answer: "Psychological hardiness and social interest",
        options: [
          "Physical strength",
          "Psychological hardiness and social interest",
          "Financial independence",
          "Social status"
        ]
      },
      {
        numb: 5,
        question: "What is a common result of using discouraging words and actions?",
        answer: "Misbehavior",
        options: [
          "Improved behavior",
          "Misbehavior",
          "Increased self-esteem",
          "Greater cooperation"
        ]
      },
      {
        numb: 6,
        question: "What is one way people commonly discourage others?",
        answer: "Setting standards too high",
        options: [
          "Encouraging effort",
          "Setting standards too high",
          "Praising achievements",
          "Allowing autonomy"
        ]
      },
      {
        numb: 7,
        question: "What is the essence of encouragement according to Mr. Rogers?",
        answer: "I like you just the way you are",
        options: [
          "You can do better",
          "I like you just the way you are",
          "You should try harder",
          "You need to improve"
        ]
      },
      {
        numb: 8,
        question: "What does encouragement enhance, leading to greater social interest?",
        answer: "A feeling of belonging",
        options: [
          "A feeling of competition",
          "A feeling of superiority",
          "A feeling of belonging",
          "A feeling of independence"
        ]
      },
      {
        numb: 9,
        question: "What is the first step to becoming an encouraging person?",
        answer: "Distinguishing encouragement from discouragement",
        options: [
          "Practicing praise",
          "Distinguishing encouragement from discouragement",
          "Setting high standards",
          "Using rewards and punishments"
        ]
      },
      {
        numb: 10,
        question: "What does Dr. Emily De Carlo emphasize about declarations?",
        answer: "We must not give our power away to others by accepting their declarations",
        options: [
          "We should accept others' declarations",
          "We must not give our power away to others by accepting their declarations",
          "Declarations are not important",
          "Others' declarations determine our fate"
        ]
      },
      {
        numb: 11,
        question: "What is a dangerous declaration mentioned by Dr. De Carlo?",
        answer: "You will not amount to anything",
        options: [
          "You will succeed",
          "You will not amount to anything",
          "You are capable",
          "You have potential"
        ]
      },
      {
        numb: 12,
        question: "What should you do to counteract negative declarations?",
        answer: "Consciously replace them with your own positive declarations",
        options: [
          "Ignore them",
          "Consciously replace them with your own positive declarations",
          "Accept them",
          "Argue against them"
        ]
      },
      {
        numb: 13,
        question: "What can you declare according to Dr. De Carlo?",
        answer: "I will survive any attempts of others to control my life",
        options: [
          "I will be controlled by others",
          "I will survive any attempts of others to control my life",
          "I will accept my fate",
          "I will not reach my goals"
        ]
      },
      {
        numb: 14,
        question: "What does being happy mean according to 'BEING Happy'?",
        answer: "Finding strength in forgiveness, hope in battles, and love in disagreements",
        options: [
          "Having a life without challenges",
          "Finding strength in forgiveness, hope in battles, and love in disagreements",
          "Always being successful",
          "Avoiding all problems"
        ]
      },
      {
        numb: 15,
        question: "What is one aspect of being happy mentioned in the text?",
        answer: "Allowing the free, happy and simple child inside each of us to live",
        options: [
          "Never making mistakes",
          "Allowing the free, happy and simple child inside each of us to live",
          "Always being right",
          "Being serious all the time"
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
  