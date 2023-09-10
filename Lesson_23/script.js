
const arr = [5, 3, "hello", 10, 8, "world", 2, 4, 6, "123"];


function findArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum;
}

const sum = findArraySum(arr);
console.log("Sum of array elements:", sum);


function findMinMax(array) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }
  }

  return { min, max };
}

const { min, max } = findMinMax(arr);
console.log("Min value in the array:", min);
console.log("Max value in the array:", max);

//виведе наступне:
// #
// ##
// ###
// ####
// #####
function drawPattern(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    pattern += "#".repeat(i) + "\n";
  }
  return pattern;
}

const patternOutput = drawPattern(5);
console.log(patternOutput);
