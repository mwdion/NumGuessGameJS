var scoresHolder = document.getElementById("scores"); //scores
var gamePlayHolder= document.getElementById("gameplay");//gameplay
var addUpperButton = document.getElementById("config");// config
var startGameButton = document.getElementsByTagName("button")[2];//third button
var element = document.querySelector('#range-options');
var upper = element.value;

//Add Player Name
var addPlayerButton = document.querySelector('#player-btn');
addPlayerButton.addEventListener('click', function(e){
  var el = document.querySelector('#new-player');
  var playerLabel = document.querySelector('#playerlabel');
  playerlabel.innerHTML= el.value;
  console.log(el.value);
  el.value = " ";
})

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
  var guessCount = 0;
  var correctGuess = false;
  var randomNumber = getRandomNumber(upper);
  console.log(randomNumber);
  function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
  console.log(num);
  }
  // onclick prompt user to guess a number
  
  do {
    guess = prompt('I am thinking of a number between 1 and ' + upper + '. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
      correctGuess = true;
      }else if(parseInt(guess) > randomNumber){
        document.write('<p>GUESS LOWER!<p>');
      }else if(parseInt(guess) < randomNumber){
        document.write('<p>GUESS HIGHER!<p>');
      } 
  } while ( ! correctGuess );
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);


  
  // if number is incorrect add li to Gameplay saying too high or too low based on guess.
  // if number is correct add li to scores with name and score.
}
// set the click handler to the addUpper function
// addUpperButton.onclick = addUpper;
// set the click handler to the addPlayerButton
// addPlayerButton.onclick = addNewPlayer;
//set the click handler to the startGameButton
startGameButton.onclick = startGame;

// cycle over the gamePlayHolder ul list items
for(var i=0; i < gamePlayHolder.children.length; i++){
   //while gameplay is occuring new elements are being added here.
}

//cycle over the scores ol list items
for(var i=0; i < scoresHolder.children.length; i++){
  // list items are saved here after game play with name and score.
  }





  
