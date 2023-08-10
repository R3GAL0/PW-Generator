// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // your code goes here...

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -----------------------------------------------------------------------------



var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var charsLo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charsUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbsA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// random array selector
// takes in an array and returns a random element from that array
function random(array) {
  var index = Math.floor(Math.random()*array.length);
  var ele = array[index]
  return ele;
}

// prompt call fucntion
function call() {
  alert("What do you want for you password?");
  var uCase = window.confirm("Do you want upper case letters?");
  var lCase = window.confirm("Do you want lower case letters?");
  var symb = window.confirm("Do you want symbols?");
  var numbs = window.confirm("Do you want numbers");
  var pass = prompt("How long do you want the password (8-128)?");
  var criteria = {
    upper: uCase,
    lower: lCase,
    number: numbs,
    symbol: symb,
    leng: pass,
  }
  console.log(criteria);
  return criteria;
}

// store prompts in an object
// use prompts to make an array of all possible chars
// make the password array
// overwrite part of the array to include all req chars
// convert the array into a string
// return the string