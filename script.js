'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  debugger;
  if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `π YOU GOT IT! π`;
    document.querySelector(`body`).style.backgroundColor = `#5FD068`;
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(
        `.message`
      ).textContent = `π TOO HIGH TRY AGAIN π`;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `YOU LOST THE GAMEππ`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.message`).textContent = `π© TOO LOW TRY AGAIN`;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `YOU LOST THE GAMEππ`;
    }
  }
  if (!guess) {
    document.querySelector(`.message`).textContent = `NOT A NUMBER!`;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector(`body`).style.backgroundColor = `#181818`;
  document.querySelector('.guess').value= ``;
  document.querySelector(`.message`).textContent = `Start guessing`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = `20`;
});
