// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// //PREP
// //peramenter- will be always be a number of unknown length
// //Return a boolean of true or  false true if number starts with a 1,2, or3 else false
// //Example
// //Psudo- take ther peram turn it into a number and then check if the 0 index is a 1 2 or 3 return true else false


function validateCode (code) {
    let str= String(code).split('')
    return str[0]==1||2||3?true:false;
}

validateCode(123)