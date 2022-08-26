console.clear;

window.alert("Welcome to the Random Password Generator");

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Created arrays of possible character choices

var numbers = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwyz';
var specialCase = '!@#$%^&*()_+<>-=~/';

//Prompts to ask questions to user
function generatePassword() {

  var allChar = "";

  console.log("btn was clicked")
  let passwdLength = window.prompt("How long would you like your password to be? It must be 8 to 128 Characters");
  if (passwdLength < 8 || passwdLength > 128 || isNaN(parseInt(passwdLength))) {
    alert("Please enter a number between 8 and 128.") ;
    generatePassword();
  } else {
    let lowerCaseLetters = window.confirm("Would you like to use lowercase characters?");
    if (lowerCaseLetters == true) {
      allChar += lowerCase
    }
    let upperCaseLetters = window.confirm("Would you like to use uppercase characters?");
    if (upperCaseLetters == true) {
      allChar += upperCase
    }
    let specialCaseLetters = window.confirm("Would you like to use special characters?");
    if (specialCaseLetters == true) {
      allChar += specialCase
    }
    let alsonumbers = confirm("Would you like to use numbers?");
    if (alsonumbers == true) {
      allChar += numbers
    }

    else {
      alert(
        "To randomly generate a password you need at least one type of character :), Please select at least one type."
      );
      generatePassword();
    }
  }

  let pword = "";
  for (let i = 0; i < passwdLength; i++) {
    pword += allChar.charAt(Math.floor(Math.random() * allChar.length))
  } return pword


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Password is ready and will display below. Have a nice day :)")

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)

