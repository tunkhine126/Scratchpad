function power(x, n) {
  let ans = x

  if (n < 0) {
    // accounting for edge cases of the answer
    ans = 1.0 / ans
    // accounting for edge cases of the variable
    x = 1.0 / x
  }

  // loop with absolute value of n
  for (let i = 0; i < (Math.abs(n) - 1); i++) {
    ans *= x
  }
  return ans
}

console.log(power(2, 6))
console.log(power(-1, 5))

// refactored 

function power(x, n) {
  let ans = x
  // loop with absolute value of n
  for (let i = 0; i < (Math.abs(n) - 1); i++) {
    ans *= x
  }
  if (n < 0) {
    // accounting for edge cases of the answer
    ans = 1.0 / ans
  }
  return ans
}
