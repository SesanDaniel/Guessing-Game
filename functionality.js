"use strict";

const checkButton = document.querySelector(".Check");
console.log(checkButton);

const refreshButton = document.querySelector(".refresh");

let number = Number(Math.trunc(Math.random() * 20 + 1));
// document.querySelector(".hidden-number").textContent = number;

let score = 20;
const modal = document.querySelector(".modal");

checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = Number(document.querySelector(".input").value);
  console.log(userInput);

  if (!userInput) {
    console.log("input a number");
    document.querySelector(".text").textContent = "🙃 Kindly input a number";
  } else if (userInput === number) {
    document.querySelector(".text").textContent = "🎈 Correct Number!";
    score++;
    document.querySelector(".score").textContent = score;
    document.body.style.backgroundColor = "#12ad2b";
    modal.style.display = "block";
    console.log(modal)
  } else if (userInput > number) {
    document.querySelector(".text").textContent = "📈 Your guess is too high";
    score--;
    if (score < 0) {
      return;
    }
    document.querySelector(".score").textContent = score;
  } else if (userInput < number) {
    document.querySelector(".text").textContent = "📉 Your guess is too low";
    score--;
    if (score < 0) {
      return;
    }
    document.querySelector(".score").textContent = score;
  }
  
  document.querySelector(".score").textContent = score;
  if (score <= 0) {
    document.body.style.backgroundColor = "#fd1c03"
  }
});


const modalText = document.querySelector(".congrats-text");
const newText = document.createTextNode(`with a score  of` + " " + score);

modalText.appendChild(newText)

// window.addEventListener('click', (e) => {
//   e.preventDefault()
//   modal.style.display = "none"
// })

refreshButton.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = Number(document.querySelector(".input").value);
  if(userInput) {
    
  }
})
