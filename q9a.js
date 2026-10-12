// Question 9 a
const numberOne = 42; // Prediction: number
const anotherNumber = "42"; // Prediction: string
const isTrue = true; // Prediction: boolean
const score = null; // Prediction: object
const user = undefined; // Prediction: undefined
const numberList = [1, 2, 3]; // Prediction: object
const myList = {a: 1} // Prediction: object
const myFunction = function() {}; // Prediction: function
const thisIsNan = NaN; // Prediction: number

console.log(typeof numberOne); 
console.log(typeof anotherNumber); 
console.log(typeof isTrue); 
console.log(typeof score); 
console.log(typeof user); 
console.log(typeof numberList);
console.log(typeof myList); 
console.log(typeof myFunction); 
console.log(typeof thisIsNan); 

// Question 9c
function getType(value) {
  return typeof value;
}

console.log(getType(numberOne));
console.log(getType(anotherNumber));
console.log(getType(isTrue));
console.log(getType(score));
console.log(getType(user));
console.log(getType(numberList));
console.log(getType(myList));
console.log(getType(myFunction));
console.log(getType(thisIsNan));