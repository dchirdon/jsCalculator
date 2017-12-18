$('document').ready(function() {
  runCalculator();
});

var num1 = 0;
var num2 = 0;
var mathDisplay = 0;

// [ ]: The calculator can perform the following operations (i.e. is a working calculator:
// * addition
// * subtraction
// * division
// * multiplication

function mathOperations(mathDisplay, num1, num2) {
  switch (mathDisplay) {
    case "+":
      return num1+num2;
      break;
    case "-":
      return num1-num2;
      break;
    case "/":
      return num1/num2;
      break;
    case "X":
      return num1*num2;
      break;
    default:
      return 0;
  }
}

// [X]: The 'C' button clears the running total/entered
// value (works like a clear button).

function clearCalc() {
  $('#clear').click(function() {
    $('#display').text("0");
    var num1 = 0;
    var num2 = 0;
    var mathDisplay = 0;
  });
}

function runCalculator() {
  clearCalc();

  $('.operator').each(function() {
    $(this).click(function(e) {

      if($(this).text() === "=") {

        num2=parseFloat($('#display').text());
        $('#display').text(mathOperations(mathDisplay, num1, num2));
        num1=parseFloat($('#display').text());

      } else {
      mathDisplay = $(this).text();
        num1= parseFloat($('#display').text());
        $('#display').text("");
      }
      return e;
    });
  });

  $('.number').each(function() {
    $(this).click(function(e) {
      $('#display').text($('#display').text()+$(this).attr("id"));

      return e;
    });
  });

}
