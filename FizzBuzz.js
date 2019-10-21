// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function FizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num
}

// console.log(FizzBuzz(15))
// console.log(FizzBuzz(1))
// console.log(FizzBuzz(2))

for (let i = 0; i < 101; i++) {
  console.log(FizzBuzz(i))
}