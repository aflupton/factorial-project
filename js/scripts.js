// business logic //
// option one: without recursion --
function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  }
  var temp = number;
  for (var i = number - 1; i >= 2; i--) {
    temp = temp * i;
  }
  return temp;
}
// option two: with recursion --
function recursion(number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    return (number * recursion(number-1));
  }
}


// UI logic //

$(document).ready(function() {
  $("form#factorial-form").submit(function(event) {
    event.preventDefault();


    var userInput = parseInt($("input#number").val());
    var result = recursion(userInput);
    $("span#answer").prepend(result);
    $("div#userOutput").show();

  });
});
