// Task

// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

//for example:
cutIt(["ab", "cde", "fgh"]); //should return ["ab","cd","fg"]
cutIt(["abc", "defgh", "ijklmn"]); //should return ["abc","def","ijk"]
cutIt(["codewars", "javascript", "java"]); // should return ["code","java","java"]

//Note: I solved this twice

function cutIt(arr) {
  let small = arr[0].length;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length < small) {
      small = arr[i].length;
    }
  }
  return arr.map((x) => x.slice(0, small));
}
////////////////////////////////////////////////////////////////

function cutIt(arr) {
  let small = Math.min(...arr.map((a) => a.length));
  return arr.map((x) => x.slice(0, small));
}