// Import stylesheets
import './style.css';

// Write Javascript code!
{const poolTable = document.getElementById("pool-table");
const message = document.getElementById("message");
const shootButton = document.getElementById("shoot-button");

const balls = [];
const ballColors = ["red", "yellow", "blue", "purple", "green", "brown", "black", "white"];

for (let i = 0; i < 8; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.backgroundColor = ballColors[i];
  ball.style.left = Math.floor(Math.random() * 480) + "px";
  ball.style.top = Math.floor(Math.random() * 280) + "px";
  poolTable.appendChild(ball);
  balls.push(ball);
}

shootButton.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    let left = parseInt(ball.style.left) + Math.floor(Math.random() * 20 - 10);
    let top = parseInt(ball.style.top) + Math.floor(Math.random() * 20 - 10);
    if (left < 0) {
      left = 0;
    }
    if (left > 480) {
      left = 480;
    }
    if (top < 0) {
      top = 0;
    }
    if (top > 280) {
      top = 280;
    }
    ball.style.left = left + "px";
    ball.style.top = top + "px";
  }
  message.textContent = "Shoot!";
});
}
