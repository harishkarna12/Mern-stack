// Task 8: Async/Await
// • Rewrite Promise chain from Task 6 using async/await.
// • Use try-catch for error handling.
// • Print final output clearly.

function getNumber() {
  return Promise.resolve(5);
}

function addTen(value) {
  return Promise.resolve(value + 10);
}

function multiplyTwo(value) {
  return Promise.resolve(value * 2);
}

async function run() {
  try {
    let result = await multiplyTwo(await addTen(await getNumber()));
    console.log("Final Output:", result);
  } catch (e) {
    console.log("Error:", e);
  }
}

run();

// output:
// Final Output: 30