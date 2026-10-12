let total = 0;

total += 2500; // bread
total += 4000; // rice
total += 1500; // milk
console.log("Total after adding items: " + total.toFixed(2));

total -= total * 0.1;
console.log("Total after 10% discount: " + total.toFixed(2));

total *= 1.075;
console.log("Total after 7.5% VAT: " + total.toFixed(2));

total /= 3;
console.log("Each person pays: " + total.toFixed(2));
