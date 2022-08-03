// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
//PREP
//Peramenter-taking in a array of boolean values , that may or may not have null or undefined ?
//Return the count of only the sheep that are in there spot
//Example
///Psudo- I can filter thought the array and get the length orrr I could loop through  and push the true into another array and get the length

function countSheeps(arrayOfSheep) {
 return arrayOfSheep.filter((x)=>x===true).length
  }

  array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    countSheeps(array1)