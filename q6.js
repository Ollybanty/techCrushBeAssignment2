// Problems with the following variable declarations:

// let a = 25; //the name a doesn't describe what the variable holds. Names should be meaningful.
// let My-Name = //"Tunde";: hyphens aren't allowed in variable names. It also starts with a capital letter, but JavaScript variables use camelCase.
// const let = 10; // let is a reserved keyword and can't be used as a variable name.
// let 2ndPlace = "Ife"; // variable names can't start with a number.
// pi = 3.14159; // pi was declared with const, so it can't be reassigned. Since pi never changes, it should stay a constant with the correct value from the start, written in UPPER_CASE.
// let userage = 30; // and let userAge = 31;: JavaScript is case-sensitive, so these are two different variables with almost the same name. This is confusing and can cause bugs. There should be one variable, userAge, that gets updated.

// Re-written variable declarations with meaningful names and correct syntax:
let age = 25;
let myName = "Tunde";
const maximumAttempts = 10;
let secondPlace = "Ife";
const PI = 3.14159;
let userAge = 30;
userAge = 31;

console.log(age, myName, maximumAttempts, secondPlace, PI, userAge);
