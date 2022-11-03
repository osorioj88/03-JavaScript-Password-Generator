// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (between 8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return "Must select between 8 and 128 characters to generate a password!";
  }

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
  var specialCharacter = confirm("Click OK to confirm including special characters.");  
  var numericCharacter = confirm("Click OK to confirm numeric characters.");
  var lowerCharacter = confirm("Click OK to confirm including lowercase characters.");
  var upperCharacter = confirm("Click OK to confirm including uppercase characters.");
  
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  if (lowerCharacter === false && upperCharacter === false && numericCharacter === false && specialCharacter === false) {
  alert("You must select OK to at least one character type");
    return "No character types selections accepted";
  }

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var passwordCharacters = "";
  if (specialCharacter === true) {
    passwordCharacters += "!@#$%^&*()_+~`|}{[]:;?><,.\/-=";
  } 
  if (numericCharacter === true) {
    passwordCharacters += "1234567890";
  }
  if (lowerCharacter === true) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCharacter === true) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.random() * passwordCharacters.length);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
