const toggle = document.querySelector('.slider');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('article');
const checkbox = document.querySelector('input');

// on reload, the toggle position will be based on the selected color scheme
if(window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    checkbox.checked = '';
  }
if(window.matchMedia('(prefers-color-scheme: light)').matches === true) {
    checkbox.checked = true;
}

// toggling light mode on
toggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    header.classList.toggle('light-theme');
    slider.classList.toggle('light-theme');
   
    for (let card of cards) {
        card.classList.toggle('light-theme');
    }
})

// when light mode is enabled, dark mode can be toggled on
checkbox.addEventListener('click', function() {
    if(window.matchMedia('(prefers-color-scheme: light)').matches === true) {
    header.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
    slider.classList.toggle('dark-theme');

    for (let card of cards) {
        card.classList.toggle('dark-theme');
    }
  }
})

// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
// https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent

// when light mode is detected the toggle checkbox will be in the checked position
var mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');

function screenTest(e) {
  if (e.matches) {
    checkbox.checked = true;
  } else {
      checkbox.checked = false;
  }
}

mediaQueryList.addEventListener('change', screenTest);