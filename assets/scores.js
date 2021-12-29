var intialsInput = document.getElementById('initials');
var scoreFinal = document.getElementById('final-score');
var submitEl = document.getElementById('submit');

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
})

    localStorage.setItem('score', score);
    localStorage.setItem('initials', initials);

    console.log(window);