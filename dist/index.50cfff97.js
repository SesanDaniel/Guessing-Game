"use strict";
const checkButton = document.querySelector(".Check");
console.log(checkButton);
let number = Number(Math.trunc(Math.random() * 20 + 1));
// document.querySelector(".hidden-number").textContent = number;
let score = 20;
checkButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const userInput = Number(document.querySelector(".input").value);
    console.log(userInput);
    if (!userInput) console.log("input a number");
    else if (userInput === number) {
        document.querySelector(".text").textContent = "\uD83C\uDF88 Correct Number!";
        score++;
        document.querySelector(".score").textContent = score;
        document.body.style.backgroundColor = "#12ad2b";
    } else if (userInput > number) {
        document.querySelector(".text").textContent = "\uD83D\uDCC8 Your guess is too high";
        score--;
        if (score < 0) return;
        document.querySelector(".score").textContent = score;
    } else if (userInput < number) {
        document.querySelector(".text").textContent = "\uD83D\uDCC9 Your guess is too low";
        score--;
        if (score < 0) return;
        document.querySelector(".score").textContent = score;
    }
});

//# sourceMappingURL=index.50cfff97.js.map
