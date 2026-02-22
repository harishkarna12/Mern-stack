// Task 5: Basic Promise
// • Create getValue() that returns a Promise.
// • Add 15 + 25 and resolve the result.
// • Use .then() to multiply result by 2 and print final value.
// Example Flow: 15 + 25 = 40 → 40 * 2 = 80

function getValue() {
  return new Promise((resolve) => {
    resolve(15 + 25);
  });
}

getValue().then((result) => {
  console.log("Result:", result * 2);
});

output:
Result: 80

