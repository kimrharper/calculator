// Business logic not included because it will remain the same.

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    var add = function(number1, number2) {
          return number1 + number2;
        };
    var subtract = function(number1, number2) {
              return number1 - number2;
            };
    var multiply = function(number1, number2) {
              return number1 * number2;
            };
    var divide = function(number1, number2) {
              return number1 / number2;
            };    
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }

    $("#output").text(result);
  });
});


/*
// For Prompt.html
// Plain Javascript Example
var $jsName = document.querySelector('.name');
var $jsValue = document.querySelector('.jsValue');

$jsName.addEventListener('input', function(event){
  $jsValue.innerHTML = $jsName.value;
}, false);


// JQuery example
var $jqName = $('.name');
var $jqValue = $('.jqValue');

$jqName.on('input', function(event){
  $jqValue.html($jqName.val());
});

// For Flashcards.html

/*$(function() {
  $("button#btnjavascript").click(function() {
    hideclasses();
    $(".javascript").show();
  });

  $("button#btnoperators").click(function() {
    hideclasses();
    $(".operators").show();
  });

  $("button#btnvariables").click(function() {
    hideclasses();
    $(".variables").show();
  });
});

function hideclasses(){
  $(".javascript").hide();
  $(".operators").hide();
  $(".variables").hide();
  $(".functions").hide();
}

/*$(".warning").fadeOut();

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
    $(".warning").fadeToggle(5000);
  });
});
*/

/*$(function(){
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
*/

/*var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter a second number:"));

var resultadd = add(number1,number2);
var resultsubstract = subtract(number1,number2);
var resultmultiply = multiply(number1,number2);
var resultdivide = divide(number1,number2);

alert("Results are: Add(" + resultadd + ") Subtract(" + resultsubstract + ") Multiply (" + resultmultiply + ") Divide(" + resultdivide + ")" );


var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
alert(newstr);
*/
