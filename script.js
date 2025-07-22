let ballPosition;
let gameStarted = false;

const message=document.getElementById("message");
const startBtn= document.getElementById("start-btn");
const replayBtn=document.getElementById("replay-btn");
const cups = document.querySelectorAll(".cup");

replayBtn.style.display="none";

startBtn.addEventListener("click", () => {
    ballPosition = Math.floor(Math.random() * 3) + 1;
    message.innerText = "Shuffling...";

    // Hide both buttons
    startBtn.style.display = "none";
    replayBtn.style.display = "none";

    // Reset all balls and lifted state
cups.forEach(cup => {
    const ball = cup.querySelector(".ball");
    const button = cup.querySelector("button");

    if (ball) ball.style.display = "none";
    if (button) button.classList.remove("lifted");
});


    // Shuffle, then allow play
    shuffleCups(() => {
        message.innerText = "Pick a cup!";
    });
});



cups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        if (!gameStarted) return;

        const selectedCup = index + 1;

        // Show the ball under the correct cup
        const correctBall = document.getElementById(`ball${ballPosition}`);
        correctBall.style.display = "block";

        // Lift the correct cup
        const correctCup = document.getElementById(`cup${ballPosition}`).querySelector("button");
        correctCup.classList.add("lifted");

        // Show result
        if (selectedCup === ballPosition) {
            message.innerText = "You won!";
        } else {
            message.innerText = `You Lost! The ball was under Cup ${ballPosition}.`;
        }

        gameStarted = false;
        startBtn.disabled = false;
        replayBtn.style.display = "inline-block";
    });
});

replayBtn.addEventListener("click", () => {
    startBtn.click();
    replayBtn.style.display = "none";
});

function shuffleCups(callback) {
    // Add shuffle class
    cups.forEach(cup => {
        cup.classList.add("shuffling");
    });

    // Disable clicking during shuffle
    gameStarted = false;

    // Remove class after animation ends (approx 800ms)
    setTimeout(() => {
        cups.forEach(cup => {
            cup.classList.remove("shuffling");
        });

        // Allow player to pick a cup
        gameStarted = true;

        if (callback) callback();
    }, 800);
}
