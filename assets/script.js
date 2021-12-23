var startingTime = 1;
let time = questions.length * 

var countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML = `${seconds}`;
    time--;
}

const startButton = document.querySelector('startQuiz');

function();                                      

var introEl = document.getElementById('start');

introEl.setAttribute('class', 'hide');
