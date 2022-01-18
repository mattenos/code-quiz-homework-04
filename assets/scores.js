// function displayScores() {
//     var finalScores = JSON.parse(localStorage.getItem('highscores')) || [];

//     // highscores.sort(function(a, b) {
//     //     return b.score - a.score;
//     // });

//     highscores.forEach(function(score){
//         var li = document.createElement('li');
//         li.textContent = score.initial + ' - ' + score.score;

//         var listEl = document.getElementById('highscores');
//         listEl.appendChild(li);
//     });
// }


// 
// var scoreText = document.getElementById('final-score');
// 

// var scoresList = document.getElementById('scores-list');
// var finalScore = time;


// scoreText.textContent = 10;

// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     highScores = JSON.parse(localStorage.getItem('scores')) || [];

//     var score = finalScore;
//     var initials = intialsInput.value;

//     var newScore = {
//         initials: initials,
//         score: score
//     };
// console.log(newScore);
//     highScores.push(newScore);

//     localStorage.setItem('scores', JSON.stringify(highScores));

//     displayScores();
// })


// function displayScores() {
//     location.href = 'scores.html';
//     for (var i = 0; i <= highScores.length; i++) {
//         var li = document.createElement("li");
//         li.innerHTML = highScores[i].initials + " - " + highScores[i].score;
//         scoresList.appendChild(li);
//     }
// }
