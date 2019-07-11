
$("#start-game-button").on("click", start);


var intervalId;
var minutes = 20 + "m";
var seconds = 00 + "s";
var number = 30;

function decrement() {


    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number < 0) {
        $("#show-number").html("<h2>" + "Time is up!" + "</h2>");
        clearInterval(intervalId);



    }
}
function start() {
    $("#show-number").html("<h2>" + number + "</h2>");
    $("#form").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);






}

