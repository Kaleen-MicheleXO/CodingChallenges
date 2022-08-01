//Complete the function which converts hex number (given as a string) to a decimal number.

//Examples
// hexToDec("1"), 1);
// hexToDec("a"), 10);
// hexToDec("10"), 16);
// hexToDec("FF"), 255);
// hexToDec("-C"), -12);

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//A radix parameter specifies the number system to use.
//2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
