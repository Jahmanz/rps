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

Game.prototype.charChoiceDisplay = function() {
  $("#charChoice").text("Player 1: " + this.playerOneChar);
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
  $(".page2").show();
  $(".page1").hide();
}

function toStage() {
  $(".page4").hide();
  $(".page3").show();
  $(".page2").hide();
  $(".page1").hide();
}

function toFight() {
  $(".page4").show();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").hide();
}


Game.prototype.getWinner = function() {
  if (inputOne !== "" && inputTwo !== "") {
    if (inputOne === "rock" && inputTwo === "scissors") {
      this.scores[0] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "rock" && inputTwo === "paper")  {
      this.scores[2] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "rock" && inputTwo === "rock")  {
      this.scores[1] += 1;
      inputOne = "";
      inputTwo = "";
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "paper" && inputTwo === "rock") {
      this.scores[0] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "paper" && inputTwo === "scissors")  {
      this.scores[2] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "paper" && inputTwo === "paper")  {
      this.scores[1] += 1;
      inputOne = "";
      inputTwo = "";
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "scissors" && inputTwo === "paper") {
      this.scores[0] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "scissors" && inputTwo === "rock")  {
      this.scores[2] += 1;
      inputOne = "";
      inputTwo = "";
    } else if (inputOne === "scissors" && inputTwo === "scissors")  {
      this.scores[1] += 1;
      inputOne = "";
      inputTwo = "";
      $("#tieMessage").text("TIE! Roll again.");
    }
    $("#playerOneScore").text(this.scores[0]);
    $("#playerTwoScore").text(this.scores[2]);



  }
}
var inputOne = "";
var inputTwo = "";

//frontend logic

$(document).ready(function () {
  var newGame = new Game(true, false, [0,0,0], "human", "comp");
  toStart();
//CHOOSE YOUR FIGHTER CLICK FUNCTION
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
        newGame.charChoiceDisplay();
        console.log(newGame.playerTwoTurn);
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
      }
    }
    else if(newGame.playerTwoTurn === true){
      if(selection === "batman") {
        newGame.playerTwoChar = "Batman";
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
        toStage();
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
//STAGE SELECTION CLICK FUNCTION
  $(".stages").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    if (selection === "epicodus"){

    }
  });
  $("#pvp").click(function () {
    newGame.playerTwo = "human";
    console.log(newGame);
    toChars();
  });
  $("#cpu").click(function () {
    newGame.playerTwo = "comp";
    console.log(newGame);
    toChars();
  });
  $("#fight").click(function () {
    toFight();
  });
  $("#newgame").click(function () {
    location.reload();
  });

  $("#p-one-rock").click(function(event) {
    event.preventDefault();
    inputOne = "rock";
    console.log(inputOne);
    newGame.getWinner();

  });
  $("#p-one-paper").click(function(event) {
    event.preventDefault();
    inputOne = "paper";
    console.log(inputOne);
    newGame.getWinner();

  });
  $("#p-one-scissors").click(function(event) {
    event.preventDefault();
    inputOne = "scissors";
    console.log(inputOne);
    newGame.getWinner();

  });
  $("#p-two-rock").click(function(event) {
    event.preventDefault();
    inputTwo = "rock";
    console.log(inputTwo);
    newGame.getWinner();

    console.log(newGame.scores);
  });
  $("#p-two-paper").click(function(event) {
    event.preventDefault();
    inputTwo = "paper";
    console.log(inputTwo);
    newGame.getWinner();

  });
  $("#p-two-scissors").click(function(event) {
    event.preventDefault();
    inputTwo = "scissors";
    console.log(inputTwo);
    newGame.getWinner();

  });


});


//   $(".reset").click(function () {
//   });
//   $(".rock").click(function () {
//   });
//   $(".paper").click(function () {
//   });
//   $(".scissors").click(function () {
//   });
// });
