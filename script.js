console.clear;

window.alert("Welcome to the Random Password Generator");

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Created arrays of possible character choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCase = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '/', '>', '-', '=', '~', '/', "'", ','];
var allChar = "";

//Prompts to ask questions to user
function generatePassword() {
  console.log("btn was clicked")
  let passwdLength = window.prompt("How long would you like your password to be? It must be 8 to 128 Characters");
  if (passwdLength < 8 || passwdLength > 128 || isNaN(parseInt(passwdLength))) {
    alert("Please enter a number between 8 and 128.");

  } else {
    let lowerCaseLetters = window.confirm("Would you like to use lowercase characters?");
    if (lowerCaseLetters) {
      allChar += lowerCase
    };
    let upperCaseLetters = window.confirm("Would you like to use uppercase characters?");
    if (upperCaseLetters) {
      allChar += upperCase
    };
    let specialCaseLetters = window.confirm("Would you like to use special characters?");
    if (specialCaseLetters) {
      allChar += specialCase
    };
    let numbers = confirm("Would you like to use numbers?");
    if (numbers) {
      allChar += numbers
    };

    console.log("promptworked")
    if (
      lowerCaseLetters === false &&
      upperCaseLetters === false &&
      specialCaseLetters === false &
      numbers === false
    ) {
      alert("to randomly generate a password you need at least one type of character :), Please select at least one type.");
      generatePassword();
    }
  }

  let pword = "";
  for (let i=0; i<passwdLength; i++){
    pword += allChar.charAt(Math.floor(Math.random() * allChar.length))
  } return pword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)

