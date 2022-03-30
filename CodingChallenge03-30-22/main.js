// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

///Okay we want to remove every other element(the odd numbered index) from the array and create a new array.
//in order to remove every other element and create a new array we will have to loop throught the first array remove the odd numbered indexed arrays and then push the answer to the new array.
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
