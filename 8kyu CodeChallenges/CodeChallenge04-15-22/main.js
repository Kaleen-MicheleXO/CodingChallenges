// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//We need to figure out how to remove all of the vowels out of a string
//The replce() method will remove the first vowel but not mutiple vowels..unless we use the //g  global which removes all

function shortcut(string) {
  let noVowel = string.replace(/[aeiou]/g, "");
  return noVowel;
}
