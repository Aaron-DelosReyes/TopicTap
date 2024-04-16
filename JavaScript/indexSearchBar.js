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
    'Representation of Functions',
    'Evaluation of Functions',
    'Operations on Functions',
    'Inverse Functions',
    'Rational Equations and Inequalities',
    'Rational Functions',
    'Graphing Rational Functions',
    'Exponential Functions',
    'Exponential Models',
    'Logarithmic Functions and Their Graphs',
    'Laws of Logarithms',
    'Exponential and Logarithmic Equations and Inequalities',
    'Simple Interest',
    'Compound Interest',
    'Simple Annuity',
    'General Annuity',
    'Stocks and Bonds',
    'Introduction to Logic',
    'Propositions and Symbols',
    'Truth Tables',
    'Forms of Conditional Propositions',
    'Tautologies and Fallacies',

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

            case 'The Great Chain of Origins':
                window.location.href = './EALS HTML/The-Great-Chain-of-Origins.html'; 
                break;
            case 'A Survey of the Solar System':
                window.location.href = './EALS HTML/A-Survey-of-the-Solar-System.html'; 
                break;
            case 'The Story of Planet Building':
                window.location.href = './EALS HTML/The-Story-of-Planet-Building.html'; 
                break;
            case 'The Physical Science Perspective':
                window.location.href = './EALS HTML/The-Physical-Science-Perspective.html'; 
                break;
            case 'The Environmental Perspective':   
                window.location.href = './EALS HTML/The-Environmental-Perspective.html'; 
                break;
            case 'Models and Systems':
                window.location.href = './EALS HTML/Models-and-Systems.html'; 
                break;
            case 'Earths Planetary Structure':
                window.location.href = './EALS HTML/Earths-Planetary-Structure.html'; 
                break;
            case 'Minerals':
                window.location.href = './EALS HTML/Minerals.html'; 
                break;
            case 'Rocks':
                window.location.href = './EALS HTML/Rocks.html'; 
                break;
            case 'Nature of Exogenic Processes':
                window.location.href = './EALS HTML/Nature-of-Exogenic-Processes.html'; 
                break;
            case 'Weathering':
                window.location.href = './EALS HTML/Weathering.html'; 
                break;
            case 'Variability in Weathering':
                window.location.href = './EALS HTML/Variability-in-Weathering.html'; 
                break;
            case 'Mass Wasting':
                window.location.href = './EALS HTML/Mass-Wasting.html'; 
                break;
            case 'Landforms and Geomorphology':
                window.location.href = './EALS HTML/Landforms-and-Geomorphology.html'; 
                break;
            case 'Tectonic Forces, Rock Structure, and Landforms':
                window.location.href = './EALS HTML/Tectonic-Forces,-Rock-Dtructure,-and-Landforms.html'; 
                break;
            case 'Earthquakes':
                window.location.href = './EALS HTML/Earthquakes.html'; 
                break;
            case 'Igneous Processes and Landforms':
                window.location.href = './EALS HTML/Igneous-Processes-and-Landforms.html'; 
                break;
            case 'Distribution of Endogenic Processes':
                window.location.href = './EALS HTML/Distribution-of-Endogenic-Processes.html'; 
                break;
            case 'Plate Tectonics':
                window.location.href = './EALS HTML/Plate-Tectonics.html'; 
                break;
            case 'Faults and Earthquakes':
                window.location.href = './EALS HTML/Faults-and-Earthquakes.html'; 
                break;
            case 'Earthquake Waves':
                window.location.href = './EALS HTML/Earthquake-Waves.html'; 
                break;
            case 'Earthquake Size and Characteristics':
                window.location.href = './EALS HTML/Earthquake-Size-and-Characteristics.html'; 
                break;
            case 'Ground Motion and Failure During Earthquakes':
                window.location.href = './EALS HTML/Ground-Motion-and-Failure-During-Earthquakes.html'; 
                break;
            case 'Volcanic Hazards':
                window.location.href = './EALS HTML/Volcanic-Hazards.html'; 
                break;
            case 'Predicting Volcanic Eruptions':
                window.location.href = './EALS HTML/Predicting-Volcanic-Eruptions.html'; 
                break;
            case 'Mitigation of Damage':
                window.location.href = './EALS HTML/Mitigation-of-Damage.html'; 
                break;
            case 'Causes of Landslides':
                window.location.href = './EALS HTML/Causes-of-Landslides.html'; 
                break;
            case 'Types of Downslope Movement':
                window.location.href = './EALS HTML/Types-of-Downslope-Movement.html'; 
                break;
            case 'Hazards Related to Landslides':
                window.location.href = './EALS HTML/Hazards-Related-to-Landslides.html'; 
                break;
            case 'Mitigation of Damages from Landslides':
                window.location.href = './EALS HTML/Mitigation-of-Damages-from-Landslides.html'; 
                break;
            case 'Hurricane Formation and Movement':
                window.location.href = './EALS HTML/Hurricane-Formation-and-Movement.html'; 
                break;
            case 'Storm Damages':
                window.location.href = './EALS HTML/Storm-Damages.html'; 
                break;
            case 'Managing Future Damages':
                window.location.href = './EALS HTML/Managing-Future-Damages.html'; 
                break;
            case 'Flooding Processes':
                window.location.href = './EALS HTML/Flooding-Processes.html'; 
                break;
            case 'Flood Intensity':
                window.location.href = './EALS HTML/Flood-Intensity.html'; 
                break;
            case 'Mudflows, Debris Flows, and Other Flood-Related Hazards':
                window.location.href = './EALS HTML/Mudflows,-Debris-Flows,-and-Other-Flood-Related-Hazards.html'; 
                break;
            case 'Erosion of Gently Sloping Coasts and Barrier Islands':
                window.location.href = './EALS HTML/Erosion-of-Gently-Sloping-Coasts-and-Barrier-Islands.html'; 
                break;
            case 'Sea-Cliff Erosion':
                window.location.href = './EALS HTML/Sea-cliff-Erosion.html'; 
                break;
            case 'Human Intervention and Mitigation of Coastal Change':
                window.location.href = './EALS HTML/Human-Intervention-and-Mitigation-of-Coastal-Change.html'; 
                break;
            case 'The Coastal Zone':
                window.location.href = './EALS HTML/The-Coastal-Zone.html'; 
                break;
            case 'Origin and Nature of Waves':
                window.location.href = './EALS HTML/Origin-and-Nature-of-Waves.html'; 
                break;
        
        
      case 'General Mathematics':
          window.location.href = './GM HTML/GM.html';
          break;

            case 'Representation of Functions':
                    window.location.href = './GM HTML/Representation-of-Functions.html'; 
                    break;
            case 'Evaluation of Functions':
                    window.location.href = './GM HTML/Evaluation-of-Functions.html'; 
                    break;
            case 'Operations on Functions':
                    window.location.href = './GM HTML/Operations-on-Functions.html'; 
                    break;
            case 'Inverse Functions':
                    window.location.href = './GM HTML/Inverse-Functions.html'; 
                    break;
            case 'Rational Equations and Inequalities':
                    window.location.href = './GM HTML/Rational-Equations-and-Inequalities.html'; 
                    break;
            case 'Rational Functions':
                    window.location.href = './GM HTML/Rational-Functions.html'; 
                    break;
            case 'Graphing Rational Functions':
                    window.location.href = './GM HTML/Graphing-Rational-Functions.html'; 
                    break;                    
            case 'Exponential Functions':
                    window.location.href = './GM HTML/Exponential-Function.html'; 
                    break;
            case 'Exponential Models':
                    window.location.href = './GM HTML/Exponential-Models.html'; 
                    break;
            case 'Logarithmic Functions and Their Graphs':
                    window.location.href = './GM HTML/Logarithmic-Functions-and-Their-Graphs.html'; 
                    break;
            case 'Laws of Logarithms':
                    window.location.href = './GM HTML/Laws-of-Logarithms.html'; 
                    break;
            case 'Exponential and Logarithmic Equations and Inequalities':
                    window.location.href = './GM HTML/Exponential-and-Logarithmic-Equations-and-Inequalities.html'; 
                    break;
            case 'Simple Interest':
                    window.location.href = './GM HTML/Simple-Interest.html'; 
                    break;
            case 'Compound Interest':
                    window.location.href = './GM HTML/Compound-Interest.html'; 
                    break;
            case 'Simple Annuity':
                    window.location.href = './GM HTML/Simple-Annuity.html'; 
                    break;
            case 'General Annuity':
                    window.location.href = './GM HTML/General-Annuity.html'; 
                    break;
            case 'Stocks and Bonds':
                    window.location.href = './GM HTML/Stocks-and-Bonds.html'; 
                    break;
            case 'Introduction to Logic':
                    window.location.href = './GM HTML/Introduction-to-Logic.html'; 
                    break;
            case 'Propositions and Symbols':
                    window.location.href = './GM HTML/Proposition-and-Symbols.html'; 
                    break;
            case 'Truth Tables':
                    window.location.href = './GM HTML/Truth-Tables.html'; 
                    break;
            case 'Forms of Conditional Propositions':
                    window.location.href = './GM HTML/Forms-Of-Conditional-Propositions.html'; 
                    break;
            case 'Tautologies and Fallacies':
                    window.location.href = './GM HTML/Tautologies-and-Fallacies.html'; 
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
