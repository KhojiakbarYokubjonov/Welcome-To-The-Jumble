/**
 * author: Khojiakbar Yokubjonov
 * date: 2/7/2023
 * description: this file contains scripts for the web application The Jumble. More specifically,
 *      it implements two different text encryption algorithms - Caesar cipher and Square cipher.
 *      These two encryptions allow the user to make slight modifications such as the shift value
 *      and the option to update the square grid.
 */

// sets up global variables and the eventListeners
var slider, sliderLabel, updateSquare, input;
window.onload = () => {
  slider = document.getElementById("slider");
  slider.addEventListener("input", updateShiftValue);
  sliderLabel = document.getElementById("slider-label");
  updateSquare = document.getElementById("update-square-button");
  updateSquare.addEventListener("click", shuffleTable);
  input = document.getElementById("input-text");
  input.addEventListener("input",updateOutputBoxes);
}
//  list of alphabetical letters in the correct order. Used by the encryption functions
const lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
't','u','v','w','x','y','z'];

var shiftValue = 0;   // default shift value
const DEFAULT_TEXT = "WELCOME TO THE JUMBLE";
var userInput = DEFAULT_TEXT;

shuffledLetters = lettersArray.slice();
shuffledLetters.pop();  // ignores the letter z for the square cipher


/**
 * shuffles the elements of an array.
 * Uses a helper function to shuffle the letters and updates the 
 * grid on the page.
 * No returns
 */
function shuffleTable(){
  shuffledLetters = shuffle(shuffledLetters);
  for(var r=0; r< table.rows.length; r++){
    for(var c=0; c<table.rows[r].cells.length; c++){
      table.rows[r].cells[c].innerHTML = shuffledLetters[5*r+c].toUpperCase();
    }
  }
  updateSquareBox();

}
/*
    a helper method that accepts an array of strings and returns 
    a copy with its elements shuffled.
    Returns:
      an array of strings
*/
function shuffle(array) {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  }

  /**
   *  accepts an alphabetical letter and returns another letter
   *  that's n letters to the right. Here, n is the shiftVal, second parameter.
   *  Returns:
   *    A String, alphabetical character.
   */
  function shiftBy (character, shiftVal){
    if(!lettersArray.includes(character.toLowerCase())){return character;}
    var index = lettersArray.indexOf(character.toLowerCase());
    var newInd = (index + shiftVal) % lettersArray.length;
    return lettersArray[newInd].toUpperCase();
  }


  /*
    Updates the top and bottom text fields with encrypted text.
    No returns.
  */
  function updateOutputBoxes(){
    userInput = input.value;
    updateCaesarBox();
    updateSquareBox();
  }

   /*
    Updates the top text field with encrypted text using Caesar cipher
    No returns.
  */
  function updateCaesarBox(){
    document.getElementById("caesar-text").innerHTML = caesarCipher(userInput);
  }

  /*
    Updates the bottom text field with encrypted text using Square cipher
    No returns.
  */
  function updateSquareBox(){
    document.getElementById("square-text").innerHTML = squareCipher(userInput);
  }

  /*
  Encrypts a given text using a Caesar Cipher
  returns the encrypted text of type String
*/
  function caesarCipher(plainText){
    var cipherText='';
    

    for (i in plainText){
      var newChar = shiftBy(plainText[i], shiftValue);
      cipherText += newChar;
     
    }
    return cipherText;

  }

/*
   Accepts an alphabetical letter and returns a corresponding letter
    from the shuffled list of letters. Letter Z is ignored since the shuffled list
    only contains 25 letters;
    Returns:
      String, an upper-case alphabetical letter
  */
function getSquareCipherChar(char){
  if(char.toLowerCase() == "z"){return char.toUpperCase();}
  if(!lettersArray.includes(char.toLowerCase())){return char;}
  ind = lettersArray.indexOf(char.toLowerCase());
  return shuffledLetters[ind].toUpperCase();
}

/*
  Encrypts a given text using a simplified version of Two Square Cipher
  returns the encrypted text
*/
function squareCipher(plainText){
  var cipherText = '';
  for (i in plainText){
    cipherText += getSquareCipherChar(plainText[i]);
  }

  return cipherText;

}

/*
    Updates the shift value with the user's choice.
    No returns
*/
function updateShiftValue(){
  shiftValue = Number(document.getElementById("slider").value);
  
  sliderLabel.innerHTML = shiftValue;
  updateCaesarBox();

}
