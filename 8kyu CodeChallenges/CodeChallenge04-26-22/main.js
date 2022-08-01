// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Examples
even_or_odd(2), "Even";
even_or_odd(7), "Odd";
even_or_odd(-42), "Even";
even_or_odd(-7), "Odd";
even_or_odd(0), "Even";

//We can simply make a ternary with the answers being ?"Odd":"Even" since the directions says to return even for even numbers and odd for odd number :)
//For our function we will need to see if a number is divisable by 2  for this we can use the modular "%" symbole
//number % 2 will be false if the number is an even value.
//If number is odd, then number % 2 == 1. Any non-zero number is a truthy value, so number % 2 evaluates to true

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
