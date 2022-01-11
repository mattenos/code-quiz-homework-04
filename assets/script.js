var startBtn = document.getElementById('start-button');
var timerEl = document.getElementById('start-time');
var questionsEl = document.getElementById('questions');
var timerId;
var time = questions.length * 15;
var questionsIndex = 0;
var choicesEl = document.getElementById('choices');
var score;



function startQuiz() {
  var introEl = document.getElementById('start');
  introEl.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class');

  timerId = setInterval(countdown, 1000);
  timerEl.textContent = time;

  getQuestions();
};

function getQuestions() {
  var currentQue = questions[questionsIndex];
  var quesEL = document.getElementById('question-title')
  quesEL.textContent = currentQue.question;

  choicesEl.innerHTML = '';

  currentQue.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement('button');
    choiceBtn.setAttribute('class', 'choice');
    choiceBtn.setAttribute('value', choice);
    choiceBtn.textContent = i + 1 + '.' + choice;
    choiceBtn.onclick = clickChoice;
    choicesEl.appendChild(choiceBtn);
  });
}

function clickChoice() {
  if (this.value !== questions[questionsIndex].answer) {
    time -= 5;
  }
  if (time < 0) {
    time = 0;
  }
  timerEl.textContent = time;

  questionsIndex++;

  if (questionsIndex === questions.length) {
    endQuiz();
  }
  else {
    getQuestions();
  }
}

function endQuiz() {
  clearInterval(timerId);
  var endscreenEl = document.getElementById('end-screen');
  endscreenEl.removeAttribute('class');
  var scoreEl = document.getElementById('final-score');
  scoreEl.textContent = time;
  questionsEl.setAttribute('class', 'hide');

  saveScore();
}


function countdown() {
  time--;
  timerEl.textContent = time;
  if (time == 0) {
    endQuiz();
  }
}

function saveScore() {
  score = time;
}

startBtn.addEventListener('click', startQuiz);