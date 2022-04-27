// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// //Examples
// feast("great blue heron", "garlic naan"), true)
// feast("chickadee", "chocolate cake"), true)
// feast("brown bear", "bear claw"), false)

//We know that we want to return true if  the first letter and last letter of the perameter of beast contains is the same as the first and last letter of the perameter of dish--We can use a ternary statement for this
//I decided to to split('') the strings so that they are arrys and we can get the index of the elemets
//We know that we want the first index[0] and the last index [x.length-1]
// the last step is to take the beastsplit array at index[0] and dish split array at index[0] and see if its equal we then have to use the && to see if the last names  of the split array are equal by seeing if the beast[beast.length-1]=== dish[dish.length-1]

function feast(beast, dish) {
  let beastSplit = beast.split("");
  let dishSplit = dish.split("");
  return beastSplit[0] == dishSplit[0] &&
    beastSplit[beast.length - 1] == dishSplit[dish.length - 1]
    ? true
    : false;
}
