// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// Examples;
// (lovefunc(1,4), true)
// (lovefunc(2,2), false)
// (lovefunc(0,1), true)
// (lovefunc(0,0), false)

//We will need to write an if then statement if one flower has an even number && the other flower has a odd number --> return True,
//We need to make sure we include both cases

function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
    ? true
    : false;
}
//We could also write it this way
//we Know one flower has to be even and the other has to be odd so therefore the sum of the two will be a odd number
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 == 1;
}
