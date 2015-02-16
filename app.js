var scoresHolder = document.getElementById("scores"); //scores
var gamePlayHolder= document.getElementById("gameplay");//gameplay
var addUpperButton = document.getElementById("config");// config
var startGameButton = document.getElementsByTagName("button")[2];//third button
var element = document.querySelector('#range-options');
var upper = element.value;
var guessCount = 0;
var playerName;
var scoreArray = [];

// add Gif Image
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}


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

// make leaderboard
function makeLeaderboard(scoreArray){
    var listContainer = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(listContainer);
    var listElement = document.createElement("ol");
    listContainer.appendChild(listElement);
    var numberOfScores = scoreArray.length;
    for( var i =  0 ; i < numberOfScores ; ++i){
      var listItem = document.createElement("li");
      listItem.innerHTML = scoreArray[i].name;
      listElement.appendChild(listItem);
    }
  }


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
  var player = {
    name: playerName.value,
    score: guessCount,
  }
  scoreArray.push(player);
  scoreArray.sort(function (a, b) {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
  console.log(scoreArray);
  if(guessCount <= 2){
    alert("You are a super GENIUS");
  } else if(guessCount <=5){
    alert("You are a smart fellow!");
  } else if (guessCount <= 10){
    alert("Keep practicing!");
  } else if (guessCount <= 15){
    alert("I don't think you should be playing this game!");
  }
  makeLeaderboard(scoreArray);
  
  var list = document.getElementById('scores');
  var entry = document.createElement('li');
  scores.appendChild(document.createTextNode("Player: " + playerName.value + " Score: " + guessCount));
  list.appendChild(entry);


  if (guessCount <= 2){
      show_image('http://www.reactiongifs.com/r/2013/11/FattyGenius.gif', 
                 276, 
                 110, 
                 'FattyGenius');
  }else if (guessCount <= 5){
    show_image('http://stream1.gifsoup.com/view/20259/smart-guy-o.gif', 
                 276, 
                 110, 
                 'SmartGuy');
  }else if (guessCount <= 10){
    show_image('http://media.giphy.com/media/QMMt03hAmVbNu/giphy.gif', 
                 276, 
                 110, 
                 'TryAgainCat');
  }else if (guessCount <= 15){
    show_image('http://www.reactiongifs.com/wp-content/uploads/2013/08/faceplant.gif', 
                 276, 
                 110, 
                 'FacePlant');

  }
};



startGameButton.onclick = startGame;



