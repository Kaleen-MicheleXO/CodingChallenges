// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

//We want to split('') the string into indvudual letters so that we are able to test to see if the 'letter' is in the array
//I decided to use th filter method and then use the includes method to return only the letters that included the 'letter'
//After we get the letters that are included in the string we  want to count them. we can do this by using the .length method.
//the .length method counts the number of elements in the array

function strCount(str, letter) {
  return str.split("").filter((x) => x.includes(letter)).length;
}
