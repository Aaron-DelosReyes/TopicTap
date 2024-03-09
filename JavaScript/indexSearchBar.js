let availableKeywords = [
  'Earth and Life Science',

    'The Great Chain of Origins', 
    'A Survey of the Solar System', 
    'The Story of Planet Building', 
    'The Physical Science Perspective', 
    'The Environmental Perspective', 
    'Models and Systems',
    
    'Earths Planetary Structure',
    'Minerals',
    'Rocks',
    
    'Nature of Exogenic Processes',
    'Weathering',
    'Variability in Weathering',
    'Mass Wasting',
    
    'Landforms and Geomorphology',
    'Tectonic Forces, Rock Structure, and Landforms',
    'Earthquakes',
    'Igneous Processes and Landforms',
    'Distribution of Endogenic Processes',
    
    'Plate Tectonics',
    
    'Faults and Earthquakes',
    'Earthquake Waves',
    'Earthquake Size and Characteristics',
    'Ground Motion and Failure During Earthquakes',
    'Volcanic Hazards',
    'Predicting Volcanic Eruptions',
    'Mitigation of Damage',
    'Causes of Landslides',
    'Types of Downslope Movement',
    'Hazards Related to Landslides',
    'Mitigation of Damages from Landslides',
    
    'Hurricane Formation and Movement',
    'Storm Damages',
    'Managing Future Damages',
    'Flooding Processes',
    'Flood Intensity',
    'Mudflows, Debris Flows, and Other Flood-Related Hazards',
    
    'Erosion of Gently Sloping Coasts and Barrier Islands',
    'Sea-Cliff Erosion',
    'Human Intervention and Mitigation of Coastal Change',
    'The Coastal Zone',
    'Origin and Nature of Waves',  
    
  'General Mathematics',
    'Functions',

  'Media and Information Literacy',
    'Media Literacy',
    'Information Literacy',
    'Technology Literacy',
    
    'Media Through the Ages',
    'Pre-Historic Era',
    'Ancient Era',
    'Industrial Era',
    'Information Era',
    'Some Theories on Information and Media',
    
    'Role of Information Literacy in the Learning Process',
    'Information Literate Required Skill',
    'Ethical Use of Information',
    'Guidelines on the Ethical Use of Information',
    'Different Types of Citations Used for Ethical Use of Information',
    
    'What is Media?',
    'Print Media',
    'Broadcast Media',
    'New Media',
    'Media Convergence',
    'Portrayal of Society in Mass Media',
    'Gender Roles',
    'Racial and Racism',
    
    'Indigenous Media and Information Sources',
    'Library',
    'Examples of Internet Media and Information Sources',
    'Other Media Information Sources',
    
    'Media Language',
    'What is Media Text',
    'Codes and Conventions',
    'Narrative and Plot',
    'Image Analysis',
    
    'Legal Issues in Media Industry',
    'Ethical Issues in the Media',
    'Opportunities and Challenges in Media and Information',
    'Media Issues in 2016',
    
    'Opportunities of Media and Information',
    'Challenges of Media and Information',
    'Power of Media and Information',
    'Threats of Media and Information',
    'Risk of Media and Information', 

    'Wearable Technologies',
    '3D Environment',
    'Ubiquitous Learning',
    'Ubiquitous Computing',
    
    'Improved Quality of Life',
    'Greater Political Participation',
    'Better Economic Opportunities',
    'Improved Learning Environment',
    'More Cohesive Social Units',
    'Influences on the Youth',
    
    'People as Media and People in Media',
    'The 12 Types of Social Media Users',
    'Six Characteristics that Clients Look for in a Social Media Manager',
    'The Advantages and Limitations',
    'The Negative Effects of Media on Society and Individuals',
    
    'Expecting About Media as Texts',
    'Text Information and Media',
    'Advantages and Disadvantages of Text Information and Media',
    'Understanding Values',
    'Teaching Media with Key Concepts',
    
    'Definition of Visual Information and Media',
    'Characteristics of Visual Information and Media',
    'Visual Information and Media Communication',
    'Design Principles and Elements of Visual Information and Media',
    
    'What is Audio?',
    'Audio Formats',
    'Analog',
    'What is the Difference Between Analog and Digital',
    
    'Motion Media',
    'Different Motion Media Formats',
    'Advantages of Motion Media',
    'Limitations of Motion Media',
    
    'Characteristics, Format, and Types of Manipulative Information and Media',
    'Disadvantages of Manipulative Information and Media',
    'Selection Criteria for Media',
    'Elements of Media Art',
    'Principles of Media Art',
    
    'Digitalization Principles',
    'Text',
    'Images',
    'Graphics',
    'Audio',
    'Video',

  'Personal Development',
  'Understanding Culture, Society, and Politics',
  'Oral Communication',
];    

const resultsBox = document.querySelector (".result-box");
const inputBox = document.getElementById ("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value; 
  if(input.length) {
    result = availableKeywords.filter ((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if(!result.length){
    resultsBox.innerHTML = '';
  }
}

function display(result) {
  const content = result.map((list)=> {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
  const selectedKeyword = list.innerHTML;
  switch(selectedKeyword) {
     case 'Earth and Life Science':
          window.location.href = './EALS HTML/EALS.html'; 
          break;
      case 'General Mathematics':
          window.location.href = './GM HTML/GM.html';
          break;

      case 'Functions':
          window.location.href = './HTML/Functions.html';
          break;

        
      case 'Media and Information Literacy':
          window.location.href = './MIL HTML/MIL.html'; 
          break;

      case 'Personal Development':
          window.location.href = './PD HTML/PD.html'; 
          break;

      case 'Understanding Culture, Society, and Politics':
          window.location.href = './UCSP HTML/UCSP.html'; 
          break;

      case 'Oral Communication':
          window.location.href = './OC HTML/OC.html'; 
          break;

      default:
          window.location.href = 'generic_page.html';
          break;
  }   
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}