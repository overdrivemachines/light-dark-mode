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

// Dark Mode Styles
function darkMode() {
  // change bg of nav and text box
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

  // Text that says dark mode light mode and the icon
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');

  // Images
  image1.src = 'img/undraw_proud_coder_dark.svg';
  image2.src = 'img/undraw_feeling_proud_dark.svg';
  image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

// Light Mode Styles
function lightMode() {
  // change bg of nav and text box
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

  // Text that says dark mode light mode and the icon
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');

  // Images
  image1.src = 'img/undraw_proud_coder_light.svg';
  image2.src = 'img/undraw_feeling_proud_light.svg';
  image3.src = 'img/undraw_conceptual_idea_light.svg';
}

// Switch Theme Dynamically
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
