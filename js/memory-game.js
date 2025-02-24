const emojis = ["❤️", "💎", "🚀", "🎸", "🔥", "🌈", "⚡", "👾"];
let cards = [...emojis, ...emojis]; // Duplicate for pairs
let flippedCards = [];
let matchedCards = [];
let board = document.getElementById("memoryBoard");
let winnerMessage = document.getElementById("winnerMessage");
let timerDisplay = document.createElement("p"); // Timer display element
let timer;
let timeElapsed = 0;
let gameStarted = false;

// Sounds
const flipSound = new Audio("sounds/click.mp3");
const winSound = new Audio("sounds/win.mp3");

// Append timer to the DOM
timerDisplay.classList.add("timer");
document.querySelector(".glow").insertBefore(timerDisplay, board);

// Shuffle function
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Create game board
function setupGame() {
    board.innerHTML = "";
    flippedCards = [];
    matchedCards = [];
    winnerMessage.textContent = "";
    shuffle(cards);
    resetTimer();

    cards.forEach((emoji, index) => {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.setAttribute("data-emoji", emoji);
        card.setAttribute("data-index", index);
        card.textContent = "❓"; // Hidden side
        card.addEventListener("click", handleCardClick);
        board.appendChild(card);
    });
}

// Handle card click
function handleCardClick(event) {
    const card = event.target;

    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    // Ignore clicks on matched cards or already flipped ones
    if (flippedCards.length >= 2 || flippedCards.includes(card) || card.classList.contains("matched")) {
        return;
    }

    flipCard(card);
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

// Flip card
function flipCard(card) {
    card.textContent = card.getAttribute("data-emoji");
    flipSound.play();
}

// Check for a match
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.getAttribute("data-emoji") === card2.getAttribute("data-emoji")) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards.push(card1, card2);

        if (matchedCards.length === cards.length) {
            stopTimer();
            winnerMessage.textContent = `You Win! 🎉 Time: ${timeElapsed} sec`;
            winSound.play();
        }
    } else {
        setTimeout(() => {
            card1.textContent = "❓";
            card2.textContent = "❓";
        }, 500);
    }

    flippedCards = [];
}

// Timer functions
function startTimer() {
    timeElapsed = 0;
    timerDisplay.textContent = `Time: ${timeElapsed} sec`;
    timer = setInterval(() => {
        timeElapsed++;
        timerDisplay.textContent = `Time: ${timeElapsed} sec`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    timeElapsed = 0;
    timerDisplay.textContent = `Time: 0 sec`;
    gameStarted = false;
}

// Restart game
function restartGame() {
    setupGame();
}

// Initialize game
setupGame();

function navigateTo(url) {
    window.location.href = url;
}
