// Task 7: Promise Error Handling
// • Create checkNumber(num) returning a Promise.
// • If num is negative → Reject with 'Negative number not allowed'.
// • Otherwise → Resolve with 'Valid number'.
// • Handle using .then() and .catch().

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      reject("Negative number not allowed");
    } else {
      resolve("Valid number");
    }
  });
}

checkNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  // output:
  // Valid number