// Функція для додавання чисел з перевіркою на тип
function addNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return NaN;
  }
}

// Функція для віднімання чисел з перевіркою на тип
function subtractNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return NaN;
  }
}

// Функція для множення чисел з перевіркою на тип
function multiplyNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return NaN;
  }
}

// Функція для ділення чисел з перевіркою на тип та ділення на нуль
function divideNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: Division by zero is not allowed.";
    }
  } else {
    return NaN;
  }
}

// Функція для пошуку мінімального та максимального числа в масиві
function findMinMaxInArray(array) {
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

// Приклад використання функцій
const resultAdd = addNumbers(5, 3);
console.log("Додавання:", resultAdd);

const resultSubtract = subtractNumbers(10, 8);
console.log("Віднімання:", resultSubtract);

const resultMultiply = multiplyNumbers(2, 4);
console.log("Множення:", resultMultiply);

const resultDivide = divideNumbers(6, 0); 

const arr = [5, 3, "hello", 10, 8, "world", 2, 4, 6, "123"];
const { min, max } = findMinMaxInArray(arr);
console.log("Min value in the array:", min);
console.log("Max value in the array:", max);
