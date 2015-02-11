var upper = prompt("What is your upper limit number?")
var randomNumber = getRandomNumber(upper);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

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
} while ( ! correctGuess )
  
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);