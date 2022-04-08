// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//We want to create an if then statement that tells us who won the game
//We will need to know every possible combination the players could use
const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "rock" && p2 === "paper") ||
    (p1 === "paper" && p2 === "scissors")
  ) {
    return "Player 2 won!";
  } else p1 === p2;
  return "Draw!";
};
