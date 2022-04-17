// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example

// [4,3,9,7,2,1]           ->        [2,9,3,49,4,1]
// [ 100, 101, 5, 5, 1, 1 ] ->       [ 10, 10201, 25, 25, 1, 1 ]
// [ 1, 2, 3, 4, 5, 6 ]    ->        [ 1, 4, 9, 2, 25, 36 ]

//Okay we know we will need to either loop or map() throught the array to return a  new array
//after we loop or Map() through we will need to see if the number is able to be square rooted, if  it is able to be square rooted the nwe will add it to the new Array,
//if the number is not able to be square rooted ( we will  know by finding the modular of that number) then we will square that number

//Solution

function squareOrSquareRoot(array) {
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      answer.push(Math.sqrt(array[i]));
    } else {
      answer.push(array[i] ** 2);
    }
  }
  return answer;
}
