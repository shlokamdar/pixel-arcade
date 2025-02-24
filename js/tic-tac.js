let currentPlayer = "❤️";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const winnerMessage = document.querySelector(".winner-message");

// Win patterns
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Handle cell click
function handleCellClick(event) {
    const index = event.target.getAttribute("data-index");

    // If already filled or game over, return
    if (board[index] !== "" || !gameActive) return;

    // Set the clicked cell
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    playClickSound();

    // Check win
    if (checkWin(currentPlayer)) {
        winnerMessage.textContent = `${currentPlayer} Wins! 🎉`;
        gameActive = false;
        launchConfetti();
        playWinSound();
        return;
    }

    // Check draw
    if (!board.includes("")) {
        winnerMessage.textContent = "It's a Draw! 😲";
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === "❤️" ? "❌" : "❤️";
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } 
    });
}


// Check win function
function checkWin(player) {
    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === player)
    );
}

// Restart game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "❤️";
    winnerMessage.textContent = "";
    cells.forEach(cell => cell.textContent = "");
}

// Load Click Sound
const clickSound = new Audio("sounds/click.mp3");
const winSound = new Audio("sounds/win.mp3");

// Function to play click sound
function playClickSound() {
    clickSound.currentTime = 0; // Reset sound for quick response
    clickSound.play();
}

// Function to play win sound
function playWinSound() {
    winSound.currentTime = 0;
    winSound.play();
}

// Add event listeners to cells
cells.forEach(cell => cell.addEventListener("click", handleCellClick));

function navigateTo(url) {
    window.location.href = url;
}
