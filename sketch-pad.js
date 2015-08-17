var num_squares = 8;
var total_squares = num_squares * num_squares;
var width = (960 - (10 * (num_squares - 1))) / num_squares;

$(document).ready(function() {
    for (var i=0; i <= total_squares-1; i++) {
        if (i%num_squares === 0) {
            $('#wrapper').append("<div class='squares clear'></div>");
        }
        else {
            $('#wrapper').append("<div class='squares'></div>");
        }
    }
    $(".squares").css("width", width);
    $(".squares").css("height", width);
    $(".squares").mouseenter(function() {
        $(this).css("background-color", "black");
    });
});

function clearSquares() {
    $(".squares").css("background-color", "white");
    answer = prompt("Enter number of squares per side");
    num_squares = answer;
    total_squares = num_squares * num_squares;
    width = (960 - (10 * (num_squares - 1))) / num_squares;
    $("#wrapper>div").remove();
    generateSquares();
}

function generateSquares() {
    for (var i=0; i <= total_squares-1; i++) {
        if (i%num_squares === 0) {
            $('#wrapper').append("<div class='squares clear'></div>");
        }
        else {
            $('#wrapper').append("<div class='squares'></div>");
        }
    }
    $(".squares").css("width", width);
    $(".squares").css("height", width);
    $(".squares").mouseenter(function() {
        $(this).css("background-color", "black");
    }) 
}