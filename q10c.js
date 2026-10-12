let x = 5; 

x++; // prediction 6. This is post so the value of x is incremented after the current expression is evaluated. The current expression evaluates to 5, but x is now 6.
console.log(x);

x **= 2; // prediction 36. x is multiplied by itself. 6 * 6 = 36
console.log(x);

x %= 7; // prediction 1. 7 gores into 36 five times with a remainder of 1. The remainder is assigned to x, meaning x is now 1.
console.log(x);

x -= 1; // prediction 0. 1 is subtracted from x, meaning x is now 0.
console.log(x);






