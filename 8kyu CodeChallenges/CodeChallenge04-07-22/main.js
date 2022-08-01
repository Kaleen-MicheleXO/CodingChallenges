// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//We want to remove all of the  numbers from the string and return the string
let stringClean = (s) => s.replace(/[0-9]/g, "");
//the .replace() method takes a string and removes ___ and replaces it with ____
//for this example we want to remove numbers from the string so /[0-9]/g. the g represents global so it will remove all numbers from the string and duplicates.
//remember .replace() returns a new string
