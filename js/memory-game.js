const emojis = ["❤️", "💎", "🚀", "🎸", "🔥", "🌈", "⚡", "👾"];
let cards = [...emojis, ...emojis]; // Duplicate for pairs
let flippedCards = [];
let matchedCards = [];
let board = document.getElementById("memoryBoard");
let winnerMessage = document.getElementById("winnerMessage");

// Sounds
const flipSound = new Audio("sounds/click.mp3");
const winSound = new Audio("sounds/win.mp3");

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
            winnerMessage.textContent = "You Win! 🎉";
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

// Restart game
function restartGame() {
    setupGame();
}

// Initialize game
setupGame();

function navigateTo(url) {
    window.location.href = url;
}

