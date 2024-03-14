let places : string[] = ["Paris", "Taj Mahal", "Kashmir","Italy", "Dubai"];
console.log("Array In Its Original Order");
console.log(places);

let arrsort = places.slice().sort()
console.log("\nSorted In Alphabetic Order");
console.log(arrsort);
console.log("\nArray is still in its original form");
console.log(places);

console.log("\nArray in Reverse Alphabetic Order");
console.log(arrsort.reverse());

console.log("\nArray is still in its original form");
console.log(places);

places.reverse();
console.log("\nOriginal List Has Been Reversed");
console.log(places);

places.reverse();
console.log("\nReversing Back The original list");
console.log(places);

places.sort();
console.log("\nSorting the Original list in Alphabetic Order");
console.log(places);

places.reverse();
console.log("\nSorting the Original list in Reverse Alphabetic Order");
console.log(places);