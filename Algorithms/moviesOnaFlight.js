// Comparison of flight time and array of movies 
// You've built an inflight entertainment system with on-demand movie streaming.
// Users on longer flights like to start a second movie right when their first one ends, 
// but they complain that the plane usually lands before they can see the ending. 
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a method that takes an integer flightTime(in minutes) and an array of integers movieLengths(in minutes) 
//and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your method:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

function movieWatching(flightTime, movieLenghts) {
  const checkedMovies = {}

  for (let i = 0; i < movieLenghts.length; i++) {
    let diff = flightTime - movieLenghts[i]

    //looking for the diff in the rest of the array

    if (checkedMovies[diff]) {
      return true
    }
    checkedMovies[movieLenghts[i]] = true
  }
  return false;
}

console.log(movieWatching(200, [100, 65, 50, 135, 80]))
console.log(movieWatching(200, [100, 65, 50, 135, -80]))