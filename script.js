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
// prompt call fucntion
// store prompts in an object
// use prompts to make an array of all possible chars
// make the password array
// overwrite part of the array to include all req chars
// convert the array into a string
// return the string