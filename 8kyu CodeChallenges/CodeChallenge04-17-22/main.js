// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//Example
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

//So we know we need to find the index of  "needle' in a array. Do find the index of a word we can use indexOf()
//once we get the index from the array we can write a contional and concat the index to the message

function findNeedle(haystack) {
  let find = haystack.indexOf("needle");
  if (find >= 0) {
    return `found the needle at position ${find}`;
  }
}
/////shorter version

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
``;
