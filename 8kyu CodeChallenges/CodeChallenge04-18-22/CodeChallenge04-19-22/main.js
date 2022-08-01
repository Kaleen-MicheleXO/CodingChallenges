// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

//We know we will have to write a if else conditional  if they are both uppercase or lowercase we need to return 1 , i one is uppercase and one is lowrcase return 0 and IF THEY ARE NOT LETTERS return -1
//for our conditionals we can check if our parameters (a,b) are deeply equal (===)to  itself .toUppercase()  or .toLowerCase()
//We can set .toUpperCase()==- .toLowerCase() which should return -1 for us

function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a.toUpperCase() === a && b.toLowerCase() === b) ||
    (a.toLowerCase() === a && b.toUpperCase() === b)
  ) {
    return 0;
  } else
    (a.toUpperCase() === a && b.toUpperCase() === b) ||
      (a.toLowerCase() === a && b.toLowerCase() === b);
  return 1;
}
