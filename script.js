'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;

let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number';
    } else if (guess === number) {
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > number) {
      displayMessage('To high!');
      score--;
    } else if (guess < number) {
      displayMessage('To low!');
      score--;
    }
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lose the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //document.querySelector('.number').textContent = number;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(number);
});
