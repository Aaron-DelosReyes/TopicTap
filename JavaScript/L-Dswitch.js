function toggleTheme() {
  var theme = document.getElementById('theme');
  if (theme.getAttribute('href') === '../CSS/subPagesDM.css') {
    theme.setAttribute('href', '../CSS/subPagesLM.css');
    localStorage.setItem('theme', 'light'); 
  } else {
    theme.setAttribute('href', '../CSS/subPagesDM.css');
    localStorage.setItem('theme', 'dark'); 
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    var theme = document.getElementById('theme');
    theme.setAttribute('href', '../CSS/subPagesLM.css');
  }
});
