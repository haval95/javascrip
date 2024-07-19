'use strict';

let activePlayer, currentScore, totalScrore;

const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnnewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', newDiceValue);
btnHold.addEventListener('click', HoldCurrent);
btnnewGame.addEventListener('click', newGame);

function newGame() {
  currentScore = 0;
  totalScrore = [0, 0];
  activePlayer = 0;
  setScrore(0);
  setScrore(1);
  calculateCurrentScore();

  btnHold.disabled = false;
  btnRoll.disabled = false;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
newGame();
function newDiceValue() {
  const newDiceValue = Math.floor(Math.random() * 6) + 1;
  ShowNewDiceValue(newDiceValue);
  if (newDiceValue === 1) return changeTurn();
  calculateCurrentScore(newDiceValue);
}

function calculateCurrentScore(value = 0) {
  if (!value) currentScore = value;
  else currentScore += value;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
}

function ShowNewDiceValue(value) {
  dice.src = `dice-${value}.png`;
}

function HoldCurrent() {
  if (currentScore === 0) return alert('you need to role the dice first');
  setScrore();
  changeTurn();
}

function changeTurn() {
  calculateCurrentScore();
  CheckWinner();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

function CheckWinner() {
  if (
    Number(document.querySelector(`#score--${activePlayer}`).textContent) > 20
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    stopGame();
  }
}

function stopGame() {
  btnHold.disabled = true;
  btnRoll.disabled = true;
}

function setScrore(player = activePlayer) {
  totalScrore[player] += currentScore;
  document.querySelector(`#score--${player}`).textContent = totalScrore[player];
}
