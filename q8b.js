// Fix using the spread operator
let userOne = { name: "Amaka", age: 22 };
let userTwo = { ...userOne };
userTwo.age = 40;
console.log(userOne.age); // prediction: 22. The spread operator creates a new object with the properties of userOne, so changing userTwo does not affect userOne.

// Testing with an object inside the object
let userThree = { name: "Amaka", age: 22, address: { city: "Lagos" } };
let userFour = { ...userThree };
userFour.age = 40;
userFour.address.city = "Abuja";
console.log(userThree.age, userThree.address.city); // 22 Abuja

// What I found: the fix does not fully work. The spread operator only makes a shallow copy (it copies the top level only).
// age was copied by value, but address is an object, so only its reference was copied.
// Both users still share the same address object, so changing the city in userFour also changes it in userThree.
