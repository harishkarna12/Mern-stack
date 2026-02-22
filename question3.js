// Task 3: Callback Chain
// • Create stepOne, stepTwo, and stepThree.
// • Each function receives a value, modifies it, and passes to next callback.
// Example Flow: Start with 2 → Add 3 → Multiply by 4 → Subtract 2


function stepOne(value, callback) {
  callback(value + 3);  
}
function stepTwo(value, callback) {
  callback(value * 4); 
}
function stepThree(value) {
  console.log("Result:", value - 2);
}

stepOne(2, function(result1) {
  stepTwo(result1, function(result2) {
    stepThree(result2);
  });
});



// output:
// Result: 18
