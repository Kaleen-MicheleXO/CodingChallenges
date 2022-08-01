//Write a function that checks if a given string (case insensitive) is a palindrome.
// Examples;
//   isPalindrome("a"), true));
//   isPalindrome("aba"), true));
//   isPalindrome("Abba"), true));
//   isPalindrome("Abba"), true));
//   isPalindrome("Abba"), true));
//   isPalindrome("hello"), false));
//   isPalindrome("Bob"), true));
//   isPalindrome("Madam"), true));
//   isPalindrome("AbBa"), true));
//   isPalindrome(""), true));

//First we need to figure out what a palindrome is.
//A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward
//now we nee to figure out how to reverse the  string and make sure that it is lower case
//we need to also make sure our orginal string is lowercased and then write a ternary operator to show true if it is a palindrome

function isPalindrome(x) {
  let final = x.split("").reverse().join("").toLowerCase();
  return final === x.toLowerCase() ? true : false;
}
