var scoresHolder = document.getElementById("scores"); //scores
var gamePlayHolder= document.getElementById("gameplay");//gameplay
var addUpperButton = document.getElementById("config");// config
var startGameButton = document.getElementsByTagName("button")[2];//third button
var element = document.querySelector('#range-options');
var upper = element.value;
var guessCount = 0;



//Add Player Name
var addPlayerButton = document.querySelector('#player-btn');
addPlayerButton.addEventListener('click', function(e){
  var el = document.querySelector('#new-player');
  var playerLabel = document.querySelector('#playerlabel');
  playerlabel.innerHTML= el.value;
  console.log(el.value);
  el.value = " ";
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
  // if number is incorrect add li to Gameplay saying too high or too low based on guess.
  do{
    guess = prompt('I am thinking of a number between 1 and ' + upper + '. What is it?');
    guessCount += 1;
    if(parseInt(guess) === randomNumber){
    correctGuess = true;
    }else if (parseInt(guess) > randomNumber){
        var gameHint = document.querySelector('#gameplay');
        gameHint.innerHTML = 'GUESS LOWER!';
      }else if(parseInt(guess) < randomNumber){
        var gameHint = document.querySelector('#gameplay');
        gameHint.innerHTML = 'GUESS HIGHER!';
    } 
  } while (!correctGuess);
  var gameHint = document.querySelector('#gameplay');
  gameHint.innerHTML = 'You win!  It took you ' + guessCount + ' tries to guess the number ' + randomNumber;
  var score = document.querySelector('#scores');
  score.innerHTML = guessCount;
};



startGameButton.onclick = startGame;



