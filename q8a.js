let a = 10;
let b = a;
b = 20;
console.log(a, b); // prediction: 10, 20. a stays 10 because numbers are primitives, so "let b = a" copies the value 10 into b. After that a and b are two separate values, so changing b does not affect a.

let userOne = { name: "Amaka", age: 22 };
let userTwo = userOne;
userTwo.age = 40;
console.log(userOne.age); // prediction: 40. Objects are non-primitives, so userOne holds a reference (the object's address in memory), not the object itself. let userTwo = userOne, copies that reference. So both point to the same object and changing userTwo.age also changes userOne.age.

// (a) The two blocks behave differently because primitives are copied by value while objects are copied by reference.
// Copying a value gives you a new independent copy, but copying a reference gives you another way to reach the same object.
