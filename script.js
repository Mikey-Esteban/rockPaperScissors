console.log("script is running");


function play(){
  winnerIs(userChoice(), computerChoice())
}


//determine winner
function winnerIs(user, comp) {
  if (user == 'rock' && comp == 'paper'){
    return 'You lost =('
  }
  else if (user == 'rock' && comp == 'scissor') {
    return 'You won!'
  }
  else if (user == 'paper' && comp == 'scissor') {
    return 'You lost!'
  }
  else if (user == 'paper' && comp == 'rock') {
    return 'You won!'
  }
  else if (user == 'scissor' && comp == 'rock') {
    return 'You lost!'
  }
  else if (user == 'scissor' && comp == 'paper') {
    return 'You won!'
  }
  else{
    return 'You both tied'
  }
}


// ask user for choice
function userChoice() {
  let choice = prompt("what is your pick? (rock paper scissor)")
  return choice
}

// computer picks between rock, paper, scissor
function computerChoice() => {
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
