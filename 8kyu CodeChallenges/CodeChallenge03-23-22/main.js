// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//Note: I solved this problem twice one with loops and another with the map method.
// We need to figure out how we can double every letter or number. So  we will have to go through every index of the string to do this we can either loop through or map but first we must split the string into individual strings
//loop-we can set our counter at 0 and the max at  the strs index length we can then locate that string with str[i] and use the repeat method and set it at 2 and push it into an array and then return it
//map- this will look a lot cleaner. we will still split the string but we will map through each string the map function

function doubleChar(str) {
  str.split("");
  let answer = [];
  for (let i = 0; i <= str.length - 1; i++) {
    answer.push(str[i].repeat(2));
  }
  return answer.join("");
}

function doubleChar(str) {
  return str
    .split("")
    .map((x) => x + x)
    .join("");
}
