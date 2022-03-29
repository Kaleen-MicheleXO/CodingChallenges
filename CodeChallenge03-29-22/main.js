// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Examples
//betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True
//betterThanAverage([2, 3], 5) should return True
//betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True

//Okay so we want to add the total points for  'classPoints' and  'yourPoints'. they are arrays so we will have to use the .reduce() method to get the total
//After we get the total we will have to divide it by the total amount of numbers in the 'classPoints' array plus the extra point from 'yourPointss. classPoints.length.
//Now we can write our conditional or ternary. it should return true if  our score was higher than the  average and false if it  was not.
``;
function betterThanAverage(classPoints, yourPoints) {
  let addTogether = classPoints.reduce((sum, current) => sum + current);
  let answer = addTogether / classPoints.length;

  return answer < yourPoints ? true : false;
}
