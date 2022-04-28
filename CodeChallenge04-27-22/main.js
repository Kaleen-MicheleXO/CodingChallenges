// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

//Examples
switchItUp(1), "One";
switchItUp(3), "Three";
switchItUp(5), "Five";

//We can write a switch statement inside of the function with e case of the switchItUp perameter.
//then each case will be the possible numbers 0-9:
//and then we will return the word of the number`

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}
