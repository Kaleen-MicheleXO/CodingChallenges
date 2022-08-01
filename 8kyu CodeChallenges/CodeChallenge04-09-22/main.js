// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }
//capitalizeWord(word)

//Example: capitalizeWord('word') --> Word
//         capitalizeWord('i') -->    I
//  capitalizeWord('glasswear') --> Glasswear

//The first function will not work because it was not set equal to a function and it would only return the first letter capitalized of the string and nothing else.
//We want to capitalize the first letter and keep the rest of the string the same.
// To do this we will have to set the function equal to a value (answer) then we will need to figure out how to add the word onto our capitalized letter(concatinate).
//Now we just need to remove our extra lowercase letter(slice) and we are done :)

function capitalizeWord(word) {
  let answer = word.charAt().toUpperCase() + word.slice(1);
  return answer;
}
