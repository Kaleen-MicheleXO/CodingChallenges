// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Examples
humanYearsCatYearsDogYears(1), [1, 15, 15];
humanYearsCatYearsDogYears(2), [2, 24, 24];
humanYearsCatYearsDogYears(10), [10, 56, 64];

//So we know  need a return with three numbers
//We can write a else if conditional
//if humanYears===1 we know that the cat and dog are 15
//if humanYears===2 we know that  the cat and dog are 24 (15+9)
//if humanYears is greater than 2 , we can subtract 2yrs from humanYears times is by 4 and then add 24( we subtract 2 years because we are adding 24cat years)
//we can do the same for the dog except we will times it by 5

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 1) {
    return [humanYears, 15, 15];
  } else if (humanYears == 2) {
    return [humanYears, 15 + 9, 15 + 9];
  } else
    return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};
