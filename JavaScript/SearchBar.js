  let availableKeywords = [
  'Earth and Life Science',
  'General Mathematics',
  'Functions',
  'Media and Information Literacy',
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
          window.location.href = 'EALS.html'; 
          break;
      case 'General Mathematics':
          window.location.href = 'GM.html';
          break;

      case 'Functions':
          window.location.href = 'Functions.html';
          break;

        
      case 'Media and Information Literacy':
          window.location.href = 'MIL.html'; 
          break;

      case 'Personal Development':
          window.location.href = 'PD.html'; 
          break;

      case 'Understanding Culture, Society, and Politics':
          window.location.href = 'UCSP.html'; 
          break;

      case 'Oral Communication':
          window.location.href = 'OC.html'; 
          break;

      default:
          window.location.href = 'generic_page.html';
          break;
  }   
}

