const student = { name: "Chidi", score: 50 };
student.score = 90;
console.log(student);
 
const grades = [1, 2, 3];
grades.push(4);
console.log(grades);
 
// student = { name: "Bola", score: 70 }; // commented out so the code below can run without errors

// The first two are allowed because we are modifying the properties of the object and the elements of the array that the constant variables point to. However, the last line throws an error because we cannot reassign a new object to a constant variable. const protects the variable from being reassigned, but it does not make the object or array itself immutable.

const details = Object.freeze({ name: "Oladele", age: 10, score: 50 });
details.score = 90; // This will not change the score property because the object is frozen.
details.name = "Bola"; // This will not change the name property because the object is frozen.
delete details.age; // This will not delete the age property because the object is frozen.
console.log(details); // Output: { name: "Oladele", age: 10, score: 50 }