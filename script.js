console.log("script is running");

let button = document.querySelector(".btn");
button.addEventListener('click', game);
let userScoreText = document.querySelector("#userDisplay");
let compScoreText = document.querySelector("#compDisplay");
let jumbotron = document.querySelector(".jumbotron");
let mainDiv = document.querySelector("#main-div");
let scoreDisplay = document.querySelector("#scoreDisplay");
let hideContainer = document.querySelector("#hide-container");
let choiceContainer = document.querySelector("#choice-container")
let roundDescription = document.querySelector("#round-description");
let rockIcon = document.querySelector("#rock");
let paperIcon = document.querySelector("#paper");
let scissorIcon = document.querySelector("#scissor");
let winnerText;
let loserText;
let finalScoreText;
let counter = 0;

function game(){
  if (counter == 0) {
  play();
  }
  else{
    console.log('we removed event listener')
    button.removeEventListener('click', game);
    button.textContent = 'Play!'
    classes = hideContainer.classList
    roundDescription.textContent = "lets see if you got what it takes!"
    if (finalScoreText) {
      finalScoreText.textContent = '';
    }
    classes.toggle("noDisplay");
    button.addEventListener('click', game);
  }
}


function play(){
  button.textContent = 'Play!'
  classes = hideContainer.classList
  roundDescription.textContent = "lets see if you got what it takes!"
  if (finalScoreText) {
    finalScoreText.textContent = '';
  }
  classes.toggle("noDisplay");

  weapons = document.querySelectorAll(".hand-icon");
  weapons.forEach(function(weapon) {
    weapon.addEventListener('click', function(){
      userWeapon = this.id;
      counter++;
      console.log(counter);
      round = chooseWinner(userWeapon, computerPlay());
      finalMessage = '';
      // score;
      if (round.winner) {
        console.log('round winner is ' + round.winner)
        console.log()
        // console.log('someone won !')
        round.winner.textContent++;
        score = 'User: ' + userScoreText.textContent + ' vs Comp: ' + compScoreText.textContent;
        sentences = round.message.split('.');
        sentences.forEach(function(sentence){
          finalMessage += sentence + '\n'
        });
      }
      else {
        console.log(round.message)
        finalMessage = 'You both tied!';
      }
      console.log(finalMessage)
      // console.log(score)
      console.log('------')
      roundDescription.textContent = finalMessage;
      console.log('we are line right before total score checker')
      if (userScoreText.textContent >= 5 || compScoreText.textContent >= 5) {
        alert('game finished')
        writeFinalScore(userScoreText, compScoreText)

        classes.toggle('noDisplay');
      }
    })
  })
}

function writeFinalScore(userScoreText, compScoreText) {
  finalScoreText = document.createElement('h1');
  if (userScoreText.textContent > compScoreText.textContent) {
    finalScoreText.textContent = "Congrats you won!!! " + userScoreText.textContent + " to " + compScoreText.textContent;
  }
  else {
    finalScoreText.textContent = 'Sorry, you lost :(( ' + userScoreText.textContent + " to " + compScoreText.textContent;
  }
  jumbotron.appendChild(finalScoreText);
  userScoreText.textContent = 0;
  compScoreText.textContent = 0;
  button.textContent = 'Play again?'
}

//determine winner
// takes in userSelection and compSelection
// returns userSelection, compSelection, and winner
function chooseWinner(user, comp) {
  if (user == 'rock' && comp == 'paper'){
    let winner = compScoreText;
    let message = 'computer chose paper. You lost =(. paper beats rock';
    return {message, winner}
  }
  else if (user == 'rock' && comp == 'scissor') {
    let winner = userScoreText;
    let message = 'computer chose scissor. You won! rock beats scissor';
    return {message, winner}
  }
  else if (user == 'paper' && comp == 'scissor') {
    let winner = compScoreText;
    let message = 'computer chose scissor. You lost. scissor beats paper';
    return {message, winner}
  }
  else if (user == 'paper' && comp == 'rock') {
    let winner = userScoreText;
    let message = 'computer chose rock. You won. paper beats rock';
    return {message, winner}
  }
  else if (user == 'scissor' && comp == 'rock') {
    let winner = compScoreText;
    let message = 'computer chose rock. You lost. rock crushes scissor';
    return {message, winner}
  }
  else if (user == 'scissor' && comp == 'paper') {
    let winner = userScoreText;
    let message = 'computer chose paper. You won. scissor cuts paper';
    return {message, winner}
  }
  else{
    let message = 'tie!\n' + 'You picked ' + user + '   comp picked ' + comp;
    return {message}
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
