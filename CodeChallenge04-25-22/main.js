// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//so we need to figure out how we can get 1 string from the size they give us
//We can loop throght this function and use the counter to see if its even or odd. if its even the string should have a '0' and  even '1'
//We can then push the number into an array and then join('') them back together in order to create one array.

function stringy(size) {
  let answer = [];
  for (let i = 1; i <= size; i++) {
    i % 2 == 0 ? answer.push("0") : answer.push("1");
  }
  return answer.join("");
}
