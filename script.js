// Starting positions
const p1Start = 1;
const p2Start = 6; 

// Track spaces
const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Player scores  
let p1Score = 0;
let p2Score = 0;

// Die rolls
let dieRolls = 0;

// Game loop
let currentRoll = 1; 
while (p1Score < 1000 && p2Score < 1000) {

  // Player 1 turn
  let roll = 0;
  for (let i = 0; i < 3; i++) {
    roll += currentRoll;
    currentRoll++;
    if (currentRoll > 100) {
      currentRoll = 1; 
    }
  }
  
  let newSpace = (p1Start + roll - 1) % 10 + 1;
  p1Start = newSpace;
  p1Score += spaces[newSpace-1];
  
  dieRolls += 3;
  
  // Check if player 1 wins
  if (p1Score >= 1000) {
    break;
  }

  // Player 2 turn
  roll = 0;
  for (let i = 0; i < 3; i++) {
    roll += currentRoll;
    currentRoll++;
    if (currentRoll > 100) {
      currentRoll = 1;
    }
  }

  newSpace = (p2Start + roll - 1) % 10 + 1;
  p2Start = newSpace;
  p2Score += spaces[newSpace-1];

  dieRolls += 3;
}

// Get result
const losingScore = Math.min(p1Score, p2Score);
const result = losingScore * dieRolls;

console.log(result);