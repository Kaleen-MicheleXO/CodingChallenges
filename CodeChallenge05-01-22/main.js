// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//We know that the well need the first letter from the first and last name.
//We can use the split method to split the two names in the middle so that they become an array with 2 elements( split("") vs split(" ") the first one splits every letter the second one splits it by the space mark)
//OK so we can use the index of the first name and the first letter [0][0] and then the index of the second name and first letter [1][0] and we will just have to make sure they are uppercase with the .toUpperCase() method
//The last thing we need to do is to add the '.' we can concat it by useing the + '.' + between the array indexs we just created

function abbrevName(name) {
  let namesplit = name.split(" ");
  return namesplit[0][0].toUpperCase() + "." + namesplit[1][0].toUpperCase();
}
