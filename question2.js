// Task 2: Basic Callback
// • Create a function startProcess(callback).
// • Add 6 + 4 and print the result.
// • Pass the result to the callback function.
// • In callback, multiply value by 5 and print final result.
// Example Flow: 6 + 4 = 10 → 10 * 5 = 50


function startProcess(callback) {
  let result = 6 + 4;
  console.log("Add Result:", result);

  callback(result);
}
startProcess((value) => {
  console.log("Final Result after callback:", value * 5);
});

// output:
// Addition Result: 10
// Final Result after callback: 50