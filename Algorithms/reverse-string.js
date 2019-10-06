// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:
// Input: ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]

// Example 2:
// Input: ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

var reverseString = function (s) {
  for (let i = 0; i < s.length; i--) {
    s.push(s[i]);
  }
  s.splice(0, s.length / 2)
  return s;
};

// Alternative if the string isnt split 

function reverseString(str) {
  // Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Return the reversed string
  return joinArray; // "olleh"
}

console.log(reverseString("hello"));