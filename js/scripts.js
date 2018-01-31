function Game(playerOneTurn, playerTwoTurn, scores, playerOne, playerTwo) {
  this.playerOneTurn = playerOneTurn;
  this.playerTwoTurn = playerTwoTurn;
  this.scores = scores;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

Game.prototype.changePlayer = function(){
  if (this.playerOneTurn === true) {
    this.playerOneTurn = false;
    this.playerTwoTurn = true;
  }
  else if (this.playerTwoTurn === true) {
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }
}

function toStart() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").show();
}

function toChars() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page1").hide();
  $(".page2").show();
}

function toStage() {
  $(".page4").hide();
  $(".page3").show();
  $(".page2").hide();
  $(".page1").hide();
}


function getWinner(inputOne, inputTwo) {
  if (inputOne === "rock" && inputTwo === "scissors") {
    newGame.scores[0] += 1;
  } else if (inputOne === "rock" && inputTwo === "paper")  {
    newGame.scores[2] += 1;
  } else if (inputOne === "rock" && inputTwo === "rock")  {
    newGame.scores[1] += 1;
  } else if (inputOne === "paper" && inputTwo === "rock") {
    newGame.scores[0] += 1;
  } else if (inputOne === "paper" && inputTwo === "scissors")  {
    newGame.scores[2] += 1;
  } else if (inputOne === "paper" && inputTwo === "paper")  {
    newGame.scores[1] += 1;
  } else if (inputOne === "scissors" && inputTwo === "paper") {
    newGame.scores[0] += 1;
  } else if (inputOne === "scissors" && inputTwo === "rock")  {
    newGame.scores[2] += 1;
  } else if (inputOne === "scissors" && inputTwo === "scissors")  {
    newGame.scores[1] += 1;
  }
}

//frontend logic

  // var selection = $(".fighters").click(function () {
  //
  // });


$(document).ready(function () {

  var newGame = new Game(true, false, [0,0,0], "human", "comp");

  $(".fighters").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    console.log(selection);

  //IF PLAYING AGAINST COMPUTER
      if(newGame.playerTwo === "comp") {
      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        console.log(newGame.playerOneChar);
        toStage();
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        console.log(newGame.playerOneChar);
        toStage();
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        console.log(newGame.playerOneChar);
        toStage();
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        toStage();
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        toStage();
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        toStage();
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        toStage();
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        toStage();
      }
    }
  //IF PLAYING AGAINST PLAYER
    else if(newGame.playerTwo === "human" && newGame.playerOneChar === undefined) {

      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        newGame.changePlayer();
        console.log(newGame.playerTwoTurn);
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        newGame.changePlayer();
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        newGame.changePlayer();
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        newGame.changePlayer();
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        newGame.changePlayer();
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        newGame.changePlayer();
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        newGame.changePlayer();
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        newGame.changePlayer();
      }
    }
    else if(newGame.playerTwoTurn === true){
      if(selection === "batman") {
        newGame.playerTwoChar = "Batman";
        console.log(newGame.playerTwoChar);
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "joker") {
        newGame.playerTwoChar = "Joker";
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "trump") {
        newGame.playerTwoChar = "Trump";
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "hillary") {
        newGame.playerTwoChar = "Hillary";
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "arnold") {
        newGame.playerTwoChar = "Arnold";
        newGame.changePlayer();
        toStage();``
      }
      else if(selection === "predator") {
        newGame.playerTwoChar = "Predator";
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "oprah") {
        newGame.playerTwoChar = "oprah";
        newGame.changePlayer();
        toStage();
      }
      else if(selection === "ellen") {
        newGame.playerTwoChar = "Ellen";
        newGame.changePlayer();
        toStage();
      }
    };
  });
  $("#pvp").click(function () {
    newGame.playerTwo = "human";
    console.log(newGame);
    toChars();
  });
  $("#cpu").click(function () {
    console.log(newGame);
    toChars();
  });
});


//   $(".back-to-start").click(function () {
//     toStart();
//   });
//   $(".back-to-chars").click(function () {
//     toChars();
//   });
//   $(".reset").click(function () {
//   });
//   $(".rock").click(function () {
//   });
//   $(".paper").click(function () {
//   });
//   $(".scissors").click(function () {
//   });
// });
