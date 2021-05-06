var  display, operation, number, equal, cancel, key, i;
key = document.querySelectorAll(".key");
operation = document.querySelectorAll(".operation");
number = document.querySelectorAll(".number");
cancel = document.querySelectorAll(".cancel");
equal = document.querySelectorAll(".equal");
display = document.querySelectorAll("#calculator_display")

function myFunction() {
    for (i = 0; i < key.length; i++) {
      key[i].style.fontSize = "150%";
    }
  }
  myFunction()

  function clickEvent() {
    for (i = 0; i < number.length; i++) {
      number[i].classList.toggle("style");
    }
  }

  function myFunct() {
    for (i = 0; i < display.length; i++) {
      display[i].style.color = "white";
    }
  }
  myFunct()

console.log('Hello world!')