
let questions = [
    {
        numb: 1,
        question: "What is intercultural communication primarily concerned with?",
        answer: "Communication among people from different nationalities and cultural backgrounds",
        options: [
          "Communication among people from the same culture",
          "Communication among people from different nationalities and cultural backgrounds",
          "Communication using only verbal methods",
          "Communication without any cultural influence"
        ]
      },
      {
        numb: 2,
        question: "Which of the following is NOT a factor that influences intercultural communication?",
        answer: "Personal hobbies",
        options: [
          "Ethnicity",
          "Religions",
          "Personal hobbies",
          "Sexual orientations"
        ]
      },
      {
        numb: 3,
        question: "In which culture does nodding indicate disagreement?",
        answer: "Greece",
        options: [
          "Indian subcontinent",
          "North America",
          "Greece",
          "Japan"
        ]
      },
      {
        numb: 4,
        question: "What stage in the Developmental Model of Intercultural Sensitivity involves recognizing cultural differences but feeling intimidated by them?",
        answer: "Defense",
        options: [
          "Denial",
          "Defense",
          "Minimization",
          "Acceptance"
        ]
      },
      {
        numb: 5,
        question: "An individual in the Denial stage might say:",
        answer: "'All cities are the same; they all have tall buildings, fast food chains, and coffee shops.'",
        options: [
          "'All cities are the same; they all have tall buildings, fast food chains, and coffee shops.'",
          "'This culture does not view life the way we do; our culture is certainly better.'",
          "'Once we see through the cultural differences, we really are just the same!'",
          "'To address our issue, I have to adjust my approach to consider both my own and my counterpart’s background.'"
        ]
      },
      {
        numb: 6,
        question: "At which stage does an individual begin to appreciate important cultural differences in behaviors and values?",
        answer: "Acceptance",
        options: [
          "Defense",
          "Minimization",
          "Acceptance",
          "Integration"
        ]
      },
      {
        numb: 7,
        question: "Which trait is NOT identified by the World Bank as a characteristic of a competent intercultural communicator?",
        answer: "Stubbornness",
        options: [
          "Flexibility",
          "Reflectiveness",
          "Stubbornness",
          "Sensitivity"
        ]
      },
      {
        numb: 8,
        question: "What does the trait 'reflectiveness' or 'mindfulness' refer to in intercultural communication?",
        answer: "Being aware of one's own cultural biases and assumptions",
        options: [
          "Being able to think creatively",
          "Being aware of one's own cultural biases and assumptions",
          "Avoiding communication with other cultures",
          "Always agreeing with other cultural viewpoints"
        ]
      },
      {
        numb: 9,
        question: "How should you address gender norms in communication to avoid bias?",
        answer: "Use plural pronouns or rewrite a sentence to avoid using pronouns",
        options: [
          "Use 'he' and 'man' to refer to a general group of people",
          "Use plural pronouns or rewrite a sentence to avoid using pronouns",
          "Ignore gender norms completely",
          "Use only male pronouns"
        ]
      },
      {
        numb: 10,
        question: "What is a key behavior to avoid when communicating interculturally?",
        answer: "Stereotyping",
        options: [
          "Using polite language",
          "Stereotyping",
          "Being open-minded",
          "Showing sensitivity"
        ]
      },
      {
        numb: 11,
        question: "According to the Developmental Model of Intercultural Sensitivity, what stage involves going beyond one's own culture and seeing things from multiple cultural perspectives?",
        answer: "Integration",
        options: [
          "Acceptance",
          "Defense",
          "Integration",
          "Adaptation"
        ]
      },
      {
        numb: 12,
        question: "Which of the following is an example of nonverbal communication?",
        answer: "Smiling",
        options: [
          "Writing an email",
          "Giving a speech",
          "Smiling",
          "Talking on the phone"
        ]
      },
      {
        numb: 13,
        question: "Which stage in the DMIS involves an individual being very open to world views and accepting new perspectives?",
        answer: "Adaptation",
        options: [
          "Defense",
          "Minimization",
          "Adaptation",
          "Integration"
        ]
      },
      {
        numb: 14,
        question: "What should you avoid to prevent miscommunication when dealing with people of different age groups?",
        answer: "Talking down to younger people and the elderly",
        options: [
          "Talking slowly",
          "Using jargon",
          "Talking down to younger people and the elderly",
          "Using clear language"
        ]
      },
      {
        numb: 15,
        question: "What is the significance of politeness in intercultural communication?",
        answer: "It shows respect for cultural differences",
        options: [
          "It ensures you always agree with others",
          "It shows respect for cultural differences",
          "It eliminates the need for verbal communication",
          "It only applies to formal settings"
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
  