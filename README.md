
# **Vanilla JS Games – Tic Tac Toe & Memory Game**  

This project features two classic games built using **HTML, CSS, and JavaScript** with a sprinkle of animations and sounds for a better experience.  

## **Features**  
✔️ Built with **pure JavaScript** (no frameworks)  
✔️ **Confetti animation** (using an external library)  
✔️ Sound effects for clicks and wins  
✔️ Simple and interactive UI  

---

## **Game Logic**  

### 🎯 **Tic Tac Toe**  
- The game is played on a **3x3 grid**, where two players take turns placing their symbols (**❤️ or ❌**).  
- There are specific **winning patterns** (rows, columns, and diagonals). If a player fills any of these, they win.  
- The game checks after each move if any of these patterns are completed. If so, it announces the winner.  
- If the board is full and no one wins, it results in a **draw**.  
- A **confetti animation** (using an external library) and a **win sound** play when a player wins.  

**Winning Patterns:**  
```
[0, 1, 2]   → First row  
[3, 4, 5]   → Second row  
[6, 7, 8]   → Third row  
[0, 3, 6]   → First column  
[1, 4, 7]   → Second column  
[2, 5, 8]   → Third column  
[0, 4, 8]   → First diagonal  
[2, 4, 6]   → Second diagonal  
```
- The game checks if the same symbol (**❤️ or ❌**) is present in any of these patterns after each move.  
- If a match is found, the game stops, displays the winner, and plays the win animation.  
- If not, the turn switches to the next player.  

---

### 🃏 **Memory Game**  
- The game starts with **a set of face-down cards**, each hiding an **emoji**.  
- The **emojis are shuffled randomly** so they appear in a different order each time.  
- Players flip two cards at a time:  
  - If the **two emojis match**, they stay visible.  
  - If they **don’t match**, they flip back after a short delay.  
- The game continues until all pairs are matched. Once all cards are flipped, a **win message and sound** play.  

**How the shuffling works:**  
- The game **duplicates the set of emojis** to create pairs.  
- It then **randomly shuffles** them using a function that ensures a different order in each game.  

**How matches are checked:**  
- When two cards are flipped, their hidden **emoji values are compared**.  
- If they match, they stay visible.  
- If not, they flip back after **0.5 seconds** to let the player memorize them.  
- The game ends when all pairs are found.  

---

## **How to Play?**  
1️⃣ Open `index.html` in any browser.  
2️⃣ Click on a game to start playing.  
3️⃣ Enjoy and challenge yourself! 🚀  

