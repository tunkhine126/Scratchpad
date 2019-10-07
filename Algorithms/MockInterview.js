// Multiply two varible without using built in multiplier function. Only use addition and subtraction
// initial test data 2*6


function multiply(a, b) {
  let output = 0
  for (let i = 0; i < b; i++) {
    output += a;
    console.log("in for loop, i is", i, "and output is ", output);
  }
  return output;
}

console.log("case 1");
console.log(multiply(2, 6));
