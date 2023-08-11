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
  var criteria = call();
  var possibleChars = [];
  var reqChars = [];
  var password = [];

  // depending on criteria adds those chars into an array, also records one char from each criteria to include in the final password
  if (criteria.upper){
    possibleChars = possibleChars.concat(charsUp);
    reqChars.push(random(charsUp));
  } 
  if (criteria.lower){
    possibleChars = possibleChars.concat(charsLo);
    reqChars.push(random(charsLo));
  } 
  if (criteria.number){
    possibleChars = possibleChars.concat(numbsA);
    reqChars.push(random(numbsA));
  } 
  if (criteria.symbol){
    possibleChars = possibleChars.concat(symbols);
    reqChars.push(random(symbols));
  } 

  // itterates over possibleChars to fill the password
  for (var i = 0; i < criteria.leng; i++){
    var single = random(possibleChars);
    password.push(single);
  }

  // overwrites the first couple entries of the pw with the reqChars
  for (var i = 0; i < reqChars.length; i++){
    password[i] = reqChars[i];
  }
  // turns the pw from an array into a string
  password = password.join('');

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -----------------------------------------------------------------------------


// all possible chars library
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var charsLo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charsUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbsA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// takes in an array and returns a random element from that array
function random(array) {
  var index = Math.floor(Math.random()*array.length);
  var ele = array[index]
  return ele;
}

// initates prompts and returns an object with the stored prompts
function call() {
  alert("What do you want for you password?");
  var uCase = window.confirm("Do you want upper case letters?");
  var lCase = window.confirm("Do you want lower case letters?");
  var symb = window.confirm("Do you want symbols?");
  var numbs = window.confirm("Do you want numbers");
  var pass = prompt("How long do you want the password (8-128)?");
  // verifies if pass is a number and if it is between 8-128. If not it assigns a value for pass
  if (!uCase && !lCase && !symb && !numbs){
    alert("You must pick one");
    window.stop();
  }
  if (pass < 8){
    pass = 8;
  }else if (pass > 128){
    pass = 128;
  }else if (!isNaN(pass)){
    pass = 8;
  }
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