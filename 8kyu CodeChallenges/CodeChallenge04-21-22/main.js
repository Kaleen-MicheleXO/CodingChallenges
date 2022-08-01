// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
//Examples
// fakeBin('45385593107843568'), '01011110001100111');
// fakeBin('509321967506747'), '101000111101101');
// fakeBin('366058562030849490134388085'), '011011110000101010000011011');

//Note: I solved this challenge twice one with loops and another with the map method
//We know we have a string of digits that we need to go through each number and see if it is below or above 5, if below 5 return 0 and above return 1 and then we need to return the whole string
//first we will have to split the string into indvidual string numbers
//then We can loop through this challege or map.
//loop- I decided to go through each string number then create an if then statement and push the number into a new array  and join('') it back together
//map- this was much easier. I split the array  and then used the map function to receate a new array. inside the map function o wrote a ternary and then joined it back together. I then returned the new array

function fakeBin(x) {
  let splitString = x.split("");
  let answer = [];
  for (let i = 0; i <= splitString.length - 1; i++) {
    if (splitString[i] < 5) {
      answer.push("0");
    } else answer.push("1");
  }
  return answer.join("");
}

function fakeBin(x) {
  let splitX = x.split("");

  let answer = splitX.map((digit) => (digit < 5 ? 0 : 1)).join("");
  return answer;
}
