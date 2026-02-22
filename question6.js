// Task 6: Promise Chain
// • Create getNumber(), addTen(value), multiplyTwo(value).
// • Chain them using .then().
// • Print when each Promise starts and final output.


function getNumber() {
  return new Promise((resolve) => {
    console.log("getNumber started");
    resolve(5);
  });
}

function addTen(value) {
  return new Promise((resolve) => {
    console.log("addTen started");
    resolve(value + 10);
  });
}

function multiplyTwo(value) {
  return new Promise((resolve) => {
    console.log("multiplyTwo started");
    resolve(value * 2);
  });
}

getNumber()
  .then(addTen)
  .then(multiplyTwo)
  .then((finalResult) => {
    console.log("Final Output:", finalResult);
  });


//   output:
//   getNumber started
//   addTen started
//   multiplyTwo started
//   Final Output: 30