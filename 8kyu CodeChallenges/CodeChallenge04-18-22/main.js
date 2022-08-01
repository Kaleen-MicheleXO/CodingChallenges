// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//So we know our answer will need to be true or false and the 'x's and 'o's will need to be  all lowercase
//We can loop throght the string and put all of the 'x's in one array and all of the 'o's in another array- this will separate them out
//once they are separated  we can create a ternary and compare the length of each array if they are equal then it should return true

function XO(str) {
  let str2 = str.toLowerCase();
  x = [];
  o = [];
  random = [];
  for (let i = 0; i <= str2.length; i++) {
    if (str2[i] === "x") {
      x.push(str2[i]);
    } else if (str2[i] === "o") {
      o.push(str2[i]);
    } else str2[i] !== "o" && str2[i] !== "x";
    random.push(str2[i]);
  }
  return x.length === o.length ? true : false;
}
