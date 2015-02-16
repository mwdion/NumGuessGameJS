var scoresHolder = document.getElementById("scores"); //scores
var gamePlayHolder= document.getElementById("gameplay");//gameplay
var addUpperButton = document.getElementById("config");// config
var startGameButton = document.getElementsByTagName("button")[2];//third button
var element = document.querySelector('#range-options');
var upper = element.value;
var guessCount = 0;
var playerName;



//Add Player Name
var addPlayerButton = document.querySelector('#player-btn');
addPlayerButton.addEventListener('click', function(e){
  playerName = document.querySelector('#new-player');
  var playerLabel = document.querySelector('#playerlabel');
  playerlabel.innerHTML= playerName.value;
  console.log(playerName.value);
  // playerName.value = " ";
});

// Set the range for the game
var rangeInput = document.querySelector('#config');
rangeInput.addEventListener('click', function(e) {
  var element = document.querySelector('#range-options');
  var label = document.querySelector('#rangelabel');
  label.innerHTML = element.value;
  upper = element.value;
  console.log(upper);
});



// Start Game
var startGame = function(){
  console.log("Game Started!");
  console.log(upper);
  var guess;
  guessCount = 0;
  var correctGuess = false;
  var randomNumber = getRandomNumber(upper);
  console.log(randomNumber);
  function getRandomNumber( upper ) {
    var num = Math.floor(Math.random() * upper) + 1; 
    return num;
  }
  do{
    guess = prompt('I am thinking of a number between 1 and ' + upper + '. What is it?');
    guessCount += 1;
    var gameHint = document.querySelector('#gameplay');
    if(parseInt(guess) === randomNumber){
    correctGuess = true;
    }else if (parseInt(guess) > randomNumber){
        gameHint.innerHTML = 'GUESS LOWER!';
      }else if(parseInt(guess) < randomNumber){
        gameHint.innerHTML = 'GUESS HIGHER!';
    } 
  } while (!correctGuess);
  var gameHint = document.querySelector('#gameplay');
  gameHint.innerHTML = 'You win!  It took you ' + guessCount + ' tries to guess the number ' + randomNumber;
  var list = document.getElementById('scores');
  // var score = document.getElementById('entry').value;
  var entry = document.createElement('li');
  scores.appendChild(document.createTextNode("Player: " +playerName.value + " Score: " + guessCount));
  list.appendChild(entry);
};



startGameButton.onclick = startGame;



