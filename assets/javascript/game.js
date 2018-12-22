var time = 60;
var intervalId;
var rightAns = ["a", "a", "b", "c", "b"];
var correctAns = 0;
var wrongAns = 0;

timer();

function timer() {
    clearInterval(intervalId);
    setInterval(count, 1000);
}

function count() {
    time--;
    $("#timer").text(time);
    if (time === 0) {
        checkAns();
    }
}

function checkAns() {
    for (let i = 0; i < rightAns.length; i++) {
        if ($(`input[name="q${i+1}"]:checked`).val() === rightAns[i]) {
            correctAns++;
        }
        $("#correctAns").text(correctAns);
        $("#wrongAns").text(rightAns.length - correctAns);
        $("#timerDiv").hide(500);
        $("form").hide(500);
        $("#scoreBoard").show(500);
    }
}

$("#submit").on("click", function (e) {
    e.preventDefault();
    checkAns();
})

var score = 0;
var questionIndex = 0;

function renderQuestion() {

    if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
}