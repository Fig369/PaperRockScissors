class PaperRockScissors{
    constructor(){
      const choices = {
        rock: {
          name: "Rock",
          defeats: "scissors",
        },
        paper: {
          name: "Paper",
          defeats: "rock",
        },
        scissors: {
          name: "Scissors",
          defeats: "paper",
        },
      };
      this.choices = choices
    }
    paper(){
      return `${this.choices.paper}`
    }
    rock(){
      return `${this.choices.rock}`
        }
    scissors(){
      return `${this.choices.scissors}`
  }
}

/* function compChoice() {
  const compChoiceNumber = Math.random();
  if (compChoiceNumber < 0.2) {
    compChoice = "rock";
  } else if (compChoiceNumber <= 0.4) {
    compChoice = "paper";
  } else if (compChoiceNumber <= 0.6) {
    compChoice = "scissors";
  }
  //console.log(compChoice);
}

function updateScore(playerChoice) {
  //console.log(playerChoice, compChoice);
  if (playerChoice === compChoice) {
    resultText.textContent = "It's a tie";
  } else {
    let choice = choices[playerChoice];
    if (choice.defeats.indexOf(compChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      compScoreNumber++;
      compScoreEl.textContent = compScoreNumber;
    }
  }
}
 */

const y = PaperRockScissors
module.exports = y
console.log(y)

