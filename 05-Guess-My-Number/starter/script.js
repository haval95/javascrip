'use strict';

let secretNumber = Math.floor(Math.random(1, 20) * 20);
let defaultScore = 20;
const msg = document.querySelector('.message');
const btn = document.querySelector('.check');
let score = document.querySelector('.score');

let highscore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let input = document.querySelector('.guess');
again.addEventListener('click', reset);

function reset() {
  secretNumber = Math.floor(Math.random(1, 20) * 20);
  defaultScore = 20;
  score.textContent = defaultScore;
  document.querySelector('.number').textContent = '?';
  displayMsg('start guessing...');
  btn.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  input.value = '';
}

function displayMsg(showingMsg) {
  msg.textContent = showingMsg;
}

btn.addEventListener('click', CheckValue);

function CheckValue() {
  if (!input.value) displayMsg('No Number!');

  if (Number(input.value) !== secretNumber) {
    defaultScore--;
    if (!defaultScore) return markLost();
    displayMsg(Number(input.value) > secretNumber ? 'Too High' : 'Too Low');
  }

  if (Number(input.value) === secretNumber) {
    if (Number(highscore.textContent) < Number(score.textContent))
      highscore.textContent = score.textContent;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMsg('Congratzzz');
    return;
  }
  score.textContent = defaultScore;
}

function markLost() {
  score.textContent = defaultScore;
  document.querySelector('body').style.backgroundColor = '#f00';
  displayMsg('You Lost the game..');
  document.querySelector('.number').textContent = secretNumber;
  btn.disabled = true;
}
