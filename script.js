// Get Element by ID helper function
function eid(id) {
  return document.getElementById(id);
}

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = eid('nav');
const toggleIcon = eid('toggle-icon');
const image1 = eid('image1');
const image2 = eid('image2');
const image3 = eid('image3');
const textBox = eid('text-box');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  // change bg of nav and text box
  nav.style.backgroundColor =  isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // Text that says dark mode light mode and the icon
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  // Images
  isDark ? imageMode('dark') : imageMode('light');
}


// Switch Theme Dynamically
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      toggleDarkLightMode(true);
    } else {
      toggleSwitch.checked = false;
      toggleDarkLightMode(false);
    }
}

