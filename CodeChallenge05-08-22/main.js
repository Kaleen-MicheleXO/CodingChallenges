// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

Example;
"hello world".toAlternatingCase() === "HELLO WORLD";
"HELLO WORLD".toAlternatingCase() === "hello world";
"hello WORLD".toAlternatingCase() === "HELLO world";
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld";
"12345".toAlternatingCase() === "12345"; // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E";
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

//Note I solved this twice
//Okay we want to return the opposite of what we get we can do this by looping or by using the map method. The map method looks cleaner and earier to read.

String.prototype.toAlternatingCase = function () {
  let str = this.split("");
  let answer = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].toUpperCase() === str[i]) {
      answer.push(str[i].toLowerCase());
    } else answer.push(str[i].toUpperCase());
  }
  return answer.join("");
};
////////////////////////////////////////////////////////////////////////////////////////
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((x) => (x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()))
    .join("");
};
