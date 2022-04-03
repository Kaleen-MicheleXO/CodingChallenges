// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not..
//P:Given array A and random value X.You want to see if A has X in in it.A can have numbers or  a string. X can be a number or a string.
//R:True if x is a, false if x is not.
//E:Given [1,2,3] as A and 4 as X, should return FALSE
//Given [7,6,3,2] as A and 6 as X, should return TRUE
//Given [] as A and 5 as X, should return FAlSE
//P: Make a function that takes in two parameters: an array, and a random number
let check = (a, x) => (a.includes(x) ? true : false);
check([1, 2, 3], 4); //should return FALSE
check([7, 6, 3, 2], 6); //should return TRUE
check([], 5); //should return FALSE
