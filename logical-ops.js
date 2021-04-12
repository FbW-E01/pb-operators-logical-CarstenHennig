// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.
const isDogBetter = true;
const isCatBetter = false;

// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.
console.log(isDogBetter && isCatBetter);
// && AND logical operator compares the values - FALSE

// - b) isDogBetter OR isCatBetter.
console.log(isDogBetter || isCatBetter);
// || OR logical operator checks if values are different - TRUE

// - c) NOT (isDogBetter AND isCatBetter).
console.log(!(isDogBetter && isCatBetter));
// Negation of AND logical operator says its true - value1 && value2 are not equal

// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.
const atoms = 10;
const sandGrains = 20;
const starsInSky = 30;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.
console.log(atoms > starsInSky && atoms > sandGrains);
// AND logical operator compares of both comparisons are true

// - b) `atoms` is NOT equal to `sandGrains`.
console.log(atoms !== sandGrains);
// Easily comparison of euqality of values

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.
console.log(starsInSky < sandGrains || starsInSky > atoms);
// OR logical operator checks of one of the comparisons are true

// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.
console.log(atoms === starsInSky || atoms !== sandGrains);
// OR logical operator checks if one of the equality checks are true

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.
console.log(atoms >= 10 && sandGrains <= 10);
// AND logical operator checks if both comparisons are true

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); 
// OR logical operator checks if one of the multiplying tasks are true

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.


