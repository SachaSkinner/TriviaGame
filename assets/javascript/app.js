var intervalId;
var number = 30;
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var userValue;
$("#timer-box").hide();
$("#submit").hide();
$("#next-question").hide()
$("#gif-no").hide()
$("#gif-almost").hide()
$("#gif-yes").hide()
function myCoolTimer() {
    // create a variable to store in a timer function later

    // how many seconds count down till 0
    var number = 30;
    // show it immediately while calling
    $("#show-number").html(number);
    interval = setInterval(decrement, 1000)

    function decrement() {
        number--;
        $("#show-number").html(number);
        if (number < 0) {
            clearInterval(interval);

            checkAnswer();

            $("#timer-box").hide();
            $("#show-number").hide();
            $("#comments").html("Time is up..")
            // submit button
            $("#submit").hide()
            $("#next-question").show()
            $("#question-box").hide()
            if (currentQuestion == questions.length - 1) {
                $("#next-question").empty()
                $("#next-question").html("See your result")
            }

        }
    }
}
$("#start-game-button").on("click", function () {
    $("#timer-box").show();
    $("#submit").show();
    $("#start-game-button").hide();

    showCurrentQuestion();
    myCoolTimer();
});

$("#submit").on("click", function () {
    checkAnswer();
    clearInterval(interval);
    currentQuestion++;
    showCurrentQuestion();
    myCoolTimer();
    // console.log(currentQuestion)
    if (currentQuestion == questions.length) {

        $("#result").html("Your result: " + correct + " correct answer(s) and " + wrong + " wrong.");
        $("#question-box").hide();
        clearInterval(interval)
        $("#timer-box").hide()
        $("#show-number").hide()
        $("#submit").hide()
        if (correct < wrong) {
            $("#gif-no").show()

        }
        if (correct == wrong) {
            $("#gif-almost").show()
        }
        if (correct > wrong) {
            $("#gif-yes").show()
        }
    }
});

$("#next-question").on("click", function () {
    currentQuestion++;
    showCurrentQuestion();
    // submit button
    $("#submit").show()
    $("#timer-box").show();
    $("#show-number").show();
    $("#comments").html("")
    $("#next-question").hide()
    $("#question-box").show()
    myCoolTimer()

    if (currentQuestion == questions.length) {
        $("#result").html("Your result: " + correct + " correct answer(s) and " + wrong + " wrong.");
        $("#question-box").hide();
        clearInterval(interval)
        $("#timer-box").hide()
        $("#show-number").hide()
        $("#submit").hide()
    }
});

var questions = [
    {
        question: "What is the oldest city in America?",
        answers: ["Albany, New York", "Saint Augustus, Florida", "Santa Few, New Mexico"],
        correct: "Saint Augustus, Florida"
    },
    {
        question: "What was the first capital of the USA?",
        answers: ["New York", "Philadelphia", "Boston"],
        correct: "Philadelphia"
    },
    {
        question: "What was the first official national park, established by President Grant in 1872? ",
        answers: ["Yosemite", "Sequoia", "Yellowstone"],
        correct: "Yellowstone"
    },
    {
        question: "How many American presidents were only children?",
        answers: ["5", "0", "12"],
        correct: "0"
    },
    {
        question: "When did 3 notorious criminals, who have still not been found, escape from Alcatraz prison?",
        answers: ["1962", "1957", "1975"],
        correct: "1962"
    },
    {
        question: "When did The Boston Tea Party happen?",
        answers: ["1673", "1873", "1773"],
        correct: "1773"
    },
    {
        question: "What is the largest state in America",
        answers: ["California", "Alaska", "Texas"],
        correct: "Alaska"
    },
    {
        question: "What is the smallest state in America",
        answers: ["Rhode Island", "Delaware", "Connecticut"],
        correct: "Rhode Island"
    },
    {
        question: "How many time zones are in the US?",
        answers: ["5", "6", "7"],
        correct: "6"
    },
    {
        question: "Christmas in America was illegal from the 1600s until which year (for the whole country) ?",
        answers: ["1889", "1807", "1907"],
        correct: "1907"
    },
    {
        question: "What president was the only one unmarried president throughout his entire life",
        answers: ["James Buchanan", "Grover Cleveland", "Ronald Reagan "],
        correct: "James Buchanan"
    },
    {
        question: "How many million people live in America?",
        answers: ["337", "387", "457"],
        correct: "337"
    },



    
    
];


function showCurrentQuestion() {

    if (currentQuestion < questions.length) {
        $("#question-box").html("<div>" + questions[currentQuestion].question + "</div>");
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            $("#question-box").append("<input type='radio' name='" + currentQuestion + "' value='" + questions[currentQuestion].answers[i] + "'>" + " " + questions[currentQuestion].answers[i] + " ")
        };
    }
}

function checkAnswer() {
    var userAnswer = $("input[name=" + currentQuestion + "]:checked").val();

    if (userAnswer === questions[currentQuestion].correct) {
        correct++;
    } else {
        wrong++;
    }
}



