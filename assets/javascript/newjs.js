// variables 
var interval;
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var correctAnswer;
// timer
// when we start a timer - click this button
function myCoolTimer() {
    // create a variable to store in a timer function later

    // how many seconds count down till 0
    var number = 5;
    // show it immediately while calling
    $("#show-number").html(number);
    interval = setInterval(decrement, 1000)

    function decrement() {
        // console.log(number--);
        $("#show-number").html(number);
        if (number < 0) {
            clearInterval(interval);
            $("#timer-box").hide();
            $("#comments").html("Time is up..")
            // submit button
            $("#submit").hide()
            $("#next-question").show()

        }
    }
}
// if user runs out of time

$("#next-question").on("click", function () {
    currentQuestion++;
    showCurrentQuestion();
    // submit button
    $("#submit").show()

    $("#timer-box").show();
    $("#comments").html("")
    $("#next-question").hide()
    myCoolTimer()
})

// start the game
$("#start-game-button").on("click", function () {
    
    // submit button
    $("#submit").show()

    myCoolTimer();
    // hide this button after clicking on it
    $("#start-game-button").hide();
    showCurrentQuestion();
})

$("#submit").on("click", function () {
    clearInterval(interval);
    currentQuestion++;
    showCurrentQuestion();
    myCoolTimer();
    // var value = $("input[name=+ "currentQuestion" + ']:checked").val();
    var value = $("input:checked").val();
    console.log(value)
    
})

// questions and answers
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
        question: "What place was he first official national park established by President Grant in 1872? ",
        answers: ["Yosemite", "Sequoia", "Yellowstone"],
        correct: "Yellowstone"
    },
    {
        question: "How many American presidents were only children?",
        answers: ["5", "0", "12"],
        correct: "0"
    },
    {
        question: "When did 3 notorious criminals who is still not found escape from Alcatraz prison?",
        answers: ["1962", "1957", "1975"],
        correct: "1962"
    },
    // {
    //     question: "",
    //     answers: ["1962", "1957", "1975"],
    //     correct: "1962"
    // },
    // James Buchanan, the 15th president, remained unmarried not only throughout his entire presidency but also throughout his entire life, the only U.S. president to do either of those things.
];
function showCurrentQuestion() {
    
    // console.log(correctAnswer)

    if (currentQuestion < questions.length) {
        var correctAnswer = questions[currentQuestion].correct;
        console.log(correctAnswer);

        $("#questionBox").html("<div>" + questions[currentQuestion].question + "</div>");
    }


    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        $("#questionBox").append("<input type='radio' name='" + currentQuestion + "' value='" + questions[currentQuestion].answers[i] + "'>" + questions[currentQuestion].answers[i])
        var value = $("input:checked").val();
        console.log(value)
    };
}