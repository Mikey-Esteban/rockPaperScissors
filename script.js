console.log("script is running");

let button = document.querySelector(".btn");
button.addEventListener('click', play);


function play(){
  let message = winnerIs(userChoice(), computerChoice());
  alert(message);
}


//determine winner
function winnerIs(user, comp) {
  if (user == 'rock' && comp == 'paper'){
    return 'You lost =( paper beats rock'
  }
  else if (user == 'rock' && comp == 'scissor') {
    return 'You won! rock beats scissor'
  }
  else if (user == 'paper' && comp == 'scissor') {
    return 'You lost! scissor beats paper'
  }
  else if (user == 'paper' && comp == 'rock') {
    return 'You won! paper beats rock'
  }
  else if (user == 'scissor' && comp == 'rock') {
    return 'You lost! rock crushes scissor'
  }
  else if (user == 'scissor' && comp == 'paper') {
    return 'You won! scissor cuts paper'
  }
  else{
    return 'You both picked ' + user
  }
}


// ask user for choice
function userChoice() {
  let choice = prompt("what is your pick? (rock paper scissor)")
  choice = choice.toLowerCase();
  return choice
}

// computer picks between rock, paper, scissor
function computerChoice() {
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
