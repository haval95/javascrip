'use strict';

let buttons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showModel);
}

closeBtn.addEventListener('click', hideModel);
overlay.addEventListener('click', hideModel);
function showModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
