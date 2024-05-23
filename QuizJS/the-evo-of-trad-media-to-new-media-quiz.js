
let questions = [
    {
        numb: 1,
        question: "What is the Prehistoric Age also known as?",
        answer: "Stone Age and the Metal Age",
        options: [
          "Stone Age and the Metal Age",
          "Bronze Age and the Iron Age",
          "Industrial Age and the Electronic Age",
          "Information Age and the Digital Age"
        ]
      },
      {
        numb: 2,
        question: "What notable invention was used widely throughout East Asia during the Prehistoric Age?",
        answer: "Printing press using wood blocks",
        options: [
          "Printing press using wood blocks",
          "Clay tablets",
          "Typewriter",
          "Telegraph"
        ]
      },
      {
        numb: 3,
        question: "When did the Industrial Age begin?",
        answer: "1700s",
        options: [
          "1700s",
          "1500s",
          "1800s",
          "1900s"
        ]
      },
      {
        numb: 4,
        question: "What major technological shift occurred during the Industrial Age?",
        answer: "From hand tools to power-driven machines",
        options: [
          "From hand tools to power-driven machines",
          "From analog to digital technology",
          "From radio to television",
          "From print to electronic media"
        ]
      },
      {
        numb: 5,
        question: "What invention made the printing of materials like newspapers faster, cheaper, and easier during the Industrial Age?",
        answer: "Steam press",
        options: [
          "Steam press",
          "Typewriter",
          "Telegraph",
          "Radio"
        ]
      },
      {
        numb: 6,
        question: "What is the key characteristic of the Electronic Age?",
        answer: "Use of electronic components like sensors and microchips",
        options: [
          "Use of electronic components like sensors and microchips",
          "Mass production of goods",
          "Introduction of the printing press",
          "Invention of the telegraph"
        ]
      },
      {
        numb: 7,
        question: "Which device became popular in the 1940s and opened new experiences for Americans?",
        answer: "Television",
        options: [
          "Television",
          "Radio",
          "Typewriter",
          "Telephone"
        ]
      },
      {
        numb: 8,
        question: "What period is characterized by a shift from traditional industry to an economy based on information computerization?",
        answer: "Information (Digital) Age",
        options: [
          "Information (Digital) Age",
          "Industrial Age",
          "Electronic Age",
          "Prehistoric Age"
        ]
      },
      {
        numb: 9,
        question: "How do traditional media and new media relate to each other in the present time?",
        answer: "Both can carry out their purpose of keeping people informed and connected",
        options: [
          "Both can carry out their purpose of keeping people informed and connected",
          "New media has completely replaced traditional media",
          "Traditional media is more interactive than new media",
          "New media has a wider reach than traditional media"
        ]
      },
      {
        numb: 10,
        question: "What is a key feature of new media according to McQuail?",
        answer: "Audiences are more involved and able to provide feedback simultaneously",
        options: [
          "Audiences are more involved and able to provide feedback simultaneously",
          "It is one-directional",
          "Media experience is limited",
          "Specific sense receptors are used"
        ]
      },
      {
        numb: 11,
        question: "Which normative theory of the press describes media under the control of the governing elite?",
        answer: "Authoritarian Theory",
        options: [
          "Authoritarian Theory",
          "Libertarian Theory",
          "Social Responsibility Theory",
          "Soviet Media Theory"
        ]
      },
      {
        numb: 12,
        question: "What did the Soviet Media Theory emphasize?",
        answer: "Serving the working class and their welfare",
        options: [
          "Serving the working class and their welfare",
          "Promoting free press without censorship",
          "Allowing media to operate under government control",
          "Emphasizing rational thought and free judgment"
        ]
      },
      {
        numb: 13,
        question: "Who is the German philosopher that developed a dialectical scheme emphasizing the progress of history and ideas?",
        answer: "Georg Wilhelm Friedrich Hegel",
        options: [
          "Georg Wilhelm Friedrich Hegel",
          "Karl Marx",
          "Joseph Stalin",
          "Benito Mussolini"
        ]
      },
      {
        numb: 14,
        question: "What was the pre-colonial Philippine writing system known as?",
        answer: "Baybayin or Alibata",
        options: [
          "Baybayin or Alibata",
          "Tagalog script",
          "Old Kawi",
          "Brahmic script"
        ]
      },
      {
        numb: 15,
        question: "What was the significance of the year 1994 in the history of media in the Philippines?",
        answer: "Philippines' first connection to the Internet was established",
        options: [
          "Philippines' first connection to the Internet was established",
          "The first telephone system began operations",
          "Local businessmen established their own radio stations",
          "Philippines was named the 'Social Media Capital of the World'"
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
                    console.log("Time Off: Auto selected correc nswer.");
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
  