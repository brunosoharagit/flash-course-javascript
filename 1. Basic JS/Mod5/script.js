console.log("1. introduction to functions");
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

console.log("2. function with params");
function functionWithArgs(n1, n2) {
  console.log(n1 + n2);
}

functionWithArgs(1, 2);

console.log("3. function with return");
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
console.log(answer);


console.log("==============================");
console.log("4. Global Scope and Function");
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();

console.log("==============================");
console.log("5. Local Scope and Functions");
const myVar = "Felipe";
function myLocalScope() {
  // Only change code below this line
  const myVar = "Bruno";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

console.log("==============================");
console.log("6. Local vs. Global Scope and Functions");
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();