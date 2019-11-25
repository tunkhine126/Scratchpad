// Given a number N return the index value of the Fibonacci 
// sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// pattern of the sequence is that each value is the sum 
// of the 2 previous values, that means that 
// for N=5 → 2+3 or:
// F(n) = F(n-1) + F(n-2) 

function fibonacci(num) {
  let a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b; // calculate the next number by adding the current number to the old number
    b = temp;
    num--;
  }
  return b;
}

console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))

//Recursive solution

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))