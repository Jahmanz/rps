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

$(".characters").last().click(function() {
//IF PLAYING AGAINST COMPUTER
    if(this.playerOneTurn === true && newGame.playerTwo === "comp") {
    if (selection === $("#square1").val()){
      this.playerOneChar = "Arnold";
      toStage();
    }
    else if (selection === $("#square2").val()){
      this.playerOneChar = "Batman";
      toStage();
    }
    else if (selection === $("#square3").val()){
      this.playerOneChar = "Hillary";
      toStage();
    }
    else if (selection === $("#square4").val()){
      this.playerOneChar = "Oprah";
      toStage();
    }
    else if (selection === $("#square5").val()){
      this.playerOneChar = "Predator";
      toStage();
    }
    else if (selection === $("#square6").val()){
      this.playerOneChar = "Joker";
      toStage();
    }
    else if (selection === $("#square7").val()){
      this.playerOneChar = "Trump";
      toStage();
    }
    else if (selection === $("#square8").val()){
      this.playerOneChar = "Ellen";
      toStage();
    }
  }
//IF PLAYING AGAINST PLAYER
  else if(this.playerOneTurn === true && newGame.playerTwo === "human") {
    if (selection === $("#square1").val()){
      this.playerOneChar = "Arnold";
      newGame.changePlayer();
    }
    else if (selection === $("#square2").val()){
      this.playerOneChar = "Batman";
      newGame.changePlayer();
    }
    else if (selection === $("#square3").val()){
      this.playerOneChar = "Hillary";
      newGame.changePlayer();
    }
    else if (selection === $("#square4").val()){
      this.playerOneChar = "Oprah";
      newGame.changePlayer();
    }
    else if (selection === $("#square5").val()){
      this.playerOneChar = "Predator";
      newGame.changePlayer();
    }
    else if (selection === $("#square6").val()){
      this.playerOneChar = "Joker";
      newGame.changePlayer();
    }
    else if (selection === $("#square7").val()){
      this.playerOneChar = "Trump";
      newGame.changePlayer();
    }
    else if (selection === $("#square8").val()){
      this.playerOneChar = "Ellen";
      newGame.changePlayer();
    }
  }
  else if(this.playerTwoTurn === true){
    if(selection === $("#square1").val()) {
      this.playerTwoChar = "Arnold";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square2").val()) {
      this.playerTwoChar = "Batman";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square3").val()) {
      this.playerTwoChar = "Hillary";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square4").val()) {
      this.playerTwoChar = "Oprah";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square5").val()) {
      this.playerTwoChar = "Predator";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square6").val()) {
      this.playerTwoChar = "Joker";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square7").val()) {
      this.playerTwoChar = "Trump";
      newGame.changePlayer();
      toStage();
    }
    if(selection === $("#square8").val()) {
      this.playerTwoChar = "Ellen";
      newGame.changePlayer();
      toStage();
    }
  }
  })

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

$(document).ready(function () {

  $("#pvp").click(function () {
    var newGame = new Game(true, false, [0,0,0], "human", "human");
    console.log(newGame);
    toChars();
  });
  $("#cpu").click(function () {
    var newGame = new Game(true, false, [0,0,0], "human", "comp");
    console.log(newGame);
    toChars();
  });
  $(".back-to-start").click(function () {
    toStart();
  });
  $(".back-to-chars").click(function () {
    toChars();
  });
  $(".reset").click(function () {
  });
  $(".rock").click(function () {
  });
  $(".paper").click(function () {
  });
  $(".scissors").click(function () {
  });
});
