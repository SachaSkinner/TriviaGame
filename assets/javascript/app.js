var intervalId;
var number = 5;
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
$("#timer-box").hide();

$("#start-game-button").on("click", function() {
    start(currentQuestion);
    $("#start-game-button").hide();
});

$("#submit").on("click", function () {
    var value = $("input:checked").val();
    $("#timer-box").html("Time Left: ");
    
    console.log(currentQuestion)
    var correctAnswer = questions[currentQuestion].correct;
    if(value === correctAnswer){
        correct++;
    } else {
        wrong++;
    };
    currentQuestion++;
    if (currentQuestion < questions.length) {
        start(currentQuestion);
    }
   
     else {
        clearInterval(intervalId)
        $("#timer-box").empty();
            $("#submit").hide();
            
            $("#questionBox").empty();
            $("#show-number").empty();
            $("#result").html("Your result: " + correct + " correct answers and "+ wrong + " wrong.");
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
        question: "What place was he first official national park established by President Grant in 1872? ",
        answers: ["Yosemite", "Sequoia", "Yellowstone"],
        correct: "Yellowstone"
    },
];


function decrement() {
    number--;
    $("#show-number").html(number);
    if (number < 0) {
        $("#show-number").html("<h2>" + "Time is up!" + "</h2>");
        $("#timer-box").html("");
        clearInterval(intervalId);
        $("#questionBox").empty();
        $("#submit").empty();
        $("#submit").html("Next question")
        if (currentQuestion == (questions.length - 1)) {
            $("#show-number").html("");
            $("#submit").html("See your result")

        }

    };
};

function start(currentQuestion) {
    console.log(currentQuestion)
    $("#submit").html("Submit");
    number = 5;
    $("#timer-box").show();
    $("#show-number").html(number);
    $("#form").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    if (currentQuestion < questions.length) { 
     $("#questionBox").html("<div>" + questions[currentQuestion].question + "</div>");    
    }

   
    for(var i = 0; i < questions[currentQuestion].answers.length; i++){
        $("#questionBox").append("<input type='radio' name='"+currentQuestion+"' value='"+ questions[currentQuestion].answers[i]+"'>" + questions[currentQuestion].answers[i])

    };
};
function stop() {
    clearInterval(intervalId);


}

