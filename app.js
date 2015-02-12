var scoresHolder = ???; //scores
var gamePlayHolder= ???;//gameplay
var newPlayerInput = ???; //new-player
var addPlayerButton = ???;//first button
var addUpperButton = ???;// second button
var startGameButton = ???;//third button


//Add New Player
var addNewPlayer = function(){
  console.log("Add new player..");
  // onclick Save player name to a variable
}

// Add Upper 
var addUpper = function(){
  console.log("Add upper...");
  // onclick Save it to upper variable
}
// Start Game
var startGame = function(){
  console.log("Game Started!");
  // onclick prompt user to guess a number
  // if number is incorrect add li to Gameplay saying too high or too low based on guess.
  // if number is correct add li to scores with name and score.
}

// var startButton = document.getElementsByTagName("button")[0]; //start button
// var upper = prompt("What is your upper limit number?");
// var randomNumber = getRandomNumber(upper);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1; 
//   return num;
// }

//   do {
//     guess = prompt('I am thinking of a number between 1 and ' + upper + '. What is it?');
//     guessCount += 1;
//     if (parseInt(guess) === randomNumber) {
//       correctGuess = true;
//       }else if(parseInt(guess) > randomNumber){
//         document.write('<p>GUESS LOWER!<p>');
//       }else if(parseInt(guess) < randomNumber){
//         document.write('<p>GUESS HIGHER!<p>');
//       } 
//   } while ( ! correctGuess );
// // startButton.onclick = startGame;

  
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

