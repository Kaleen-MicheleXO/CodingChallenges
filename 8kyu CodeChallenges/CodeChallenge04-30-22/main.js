// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array

//Example
//[0, 1, 2, 3, 5, 8, 13], 3 => [0, 1, 2]

//the .splice() take a section of the orgional array out. it takes two parameters (start,end) the start parameter is the index that you will start at and the end is the index you will end at. you an also just use one parameter start and it will start a that index and return anything after that index number
//.slice(start,end)

function take(arr, n) {
  return arr.slice(0, n);
}
