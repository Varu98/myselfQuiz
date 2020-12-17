var readlineSynce = require("readline-sync");

var score = 0;

//highscore data

var highscore = [
  {
    name: "varu",
    score: 4,
  },
  {
    name: "evil_varu",
    score: 5,
  },
];

//array data

var questions = [
  {
    question:
      "Please reply only in A,B,C,D format no need to type the whole word\nWhat is varu's favourite food?\n A)Pav Bhaji \nB)Chole Bhature \nC)Maggi \nD)Peesha(Pizza)\n",

    answer: "pizza",
  },
  {
    question: "What is my favourite sport ?\nSwimming\nFootball\nBasketball\n",
    answer: "swimming",
  },
  {
    question: "Indoor Game\nChess\nCarrom\nUno\nLudo",
    answer: "Chess",
  },
];

//welcome function

function welcome() {
  var userName = readlineSynce.question("What is your name?");

  console.log(
    "Hi " +
      userName +
      " lets See if You can guess some answers of me, shall we?"
  );
}

//play function

function play(question, answer) {
  var userAnswer = readlineSynce.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right !");

    score = score++;
  } else {
    console.log("Wrong!");
  }

  console.log("Current Score is " + score);
  console.log("________________");
}

//game function

function game() {
  for (let index = 0; index < questions.length; index++) {
    const currentQuestion = questions[index];

    play(currentQuestion.question, currentQuestion.answer);
  }
}

//function to show scores

function showScores() {
  console.log("Yay you Scored " + score);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );
  highscore.map((score) => console.log(score.name, ":", score.score));
}

welcome();
game();
showScores();
