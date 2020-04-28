console.log("script is running");

let button = document.querySelector(".btn");
button.addEventListener('click', game);
let userScoreText = document.querySelector("#userDisplay");
let compScoreText = document.querySelector("#compDisplay");
let scoreDisplay = document.querySelector("#scoreDisplay");
console.log(scoreDisplay)

function game(){
    while (userScoreText.textContent < 3 && compScoreText.textContent < 3) {
      play();
    }
    classes = scoreDisplay.classList
    classes.remove("noDisplay");
    alert('Thanks for playing!!');
}

function play(){
  let round = winnerIs(userSelection(), computerPlay());
  let finalMessage;
  if (round.winner) {
    round.winner.textContent++;
    let score = 'User: ' + userScoreText.textContent + ' vs Comp: ' + compScoreText.textContent;
    finalMessage = round.message + '\n' + score;
  }
  else {
    finalMessage = 'You both tied!';
  }
  alert(finalMessage);
}


//determine winner
// takes in userSelection and compSelection
// returns userSelection, compSelection, and winner
function winnerIs(user, comp) {
  if (user == 'rock' && comp == 'paper'){
    let winner = compScoreText;
    let message = 'computer chose paper\n You lost =( paper beats rock';
    return {message, winner}
    // compScoreText.textContent ++;
  }
  else if (user == 'rock' && comp == 'scissor') {
    let winner = userScoreText;
    let message = 'computer chose scissor\n You won! rock beats scissor';
    return {message, winner}
    // userScoreText.textContent ++;
    // let message = 'computer chose scissor\n You won! rock beats scissor';
    // return message + 'You won! rock beats scissor'
  }
  else if (user == 'paper' && comp == 'scissor') {
    let winner = compScoreText;
    let message = 'computer chose scissor\n You lost! scissor beats paper';
    return {message, winner}
    // compScoreText.textContent ++;
    // let message = 'computer chose scissor\n You lost! scissor beats paper';
    // return message + 'You lost! scissor beats paper'
  }
  else if (user == 'paper' && comp == 'rock') {
    let winner = userScoreText;
    let message = 'computer chose rock\n You won! paper beats rock';
    return {message, winner}
    // userScoreText.textContent ++;
    // let message = 'computer chose rock\n You won! paper beats rock';
    // return message + 'You won! paper beats rock'
  }
  else if (user == 'scissor' && comp == 'rock') {
    let winner = compScoreText;
    let message = 'computer chose rock\n You lost! rock crushes scissor';
    return {message, winner}
    // compScoreText.textContent ++;
    // let message = 'computer chose rock\n You lost! rock crushes scissor';
    // return message + 'You lost! rock crushes scissor'
  }
  else if (user == 'scissor' && comp == 'paper') {
    let winner = userScoreText;
    let message = 'computer chose paper\n You won! scissor cuts paper';
    return {message, winner}
    // userScoreText.textContent ++;
    // let message = 'computer chose paper\n You won! scissor cuts paper';
    // return message + 'You won! scissor cuts paper'
  }
  else{
    let message = 'tie!\n';
    return message + 'You both picked ' + user
  }
}


// ask user for choice
function userSelection() {
  selection = ['rock', 'paper', 'scissor']

  while (true) {
    let choice = prompt("Please choose one of these options =) (rock paper scissor)")
    choice = choice.toLowerCase();

    if (selection.includes(choice)) {
      return choice
    }
  }
}

// computer picks between rock, paper, scissor
function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0){
    return 'rock';
  }
  else if (choice == 1){
    return 'paper';
  }
  else{
    return 'scissor';
  }
}
