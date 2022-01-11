var intialsInput = document.getElementById('initials');
var scoreText = document.getElementById('final-score');
var submitBtn = document.getElementById('submit');
var highScores;
var scoresList = document.getElementById('scores-list');
var finalScore = time;


scoreText.textContent = 10;

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    highScores = JSON.parse(localStorage.getItem('scores')) || [];

    var score = finalScore;
    var initials = intialsInput.value;

    var newScore = {
        initials: initials,
        score: score
    };
console.log(newScore);
    highScores.push(newScore);

    localStorage.setItem('scores', JSON.stringify(highScores));

    displayScores();
})


function displayScores() {
    location.href = 'scores.html';
    for (var i = 0; i <= highScores.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = highScores[i].initials + " - " + highScores[i].score;
        scoresList.appendChild(li);
    }
}
