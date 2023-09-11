// Конструктор Accumulator
function Accumulator(initialValue) {
    this.value = initialValue;
  
    // Метод для збільшення значення на 1
    this.increment = function () {
      this.value += 1;
    };
  
    // Метод для зменшення значення на 1
    this.decrement = function () {
      this.value -= 1;
    };
  }
  
  // Конструктор CancelableAccumulator, який наслідує Accumulator
  function CancelableAccumulator(initialValue) {
    // Викликаємо конструктор Accumulator для успадкування властивостей
    Accumulator.call(this, initialValue);
  
    // Метод для скидання значення на початкове
    this.clear = function () {
      this.value = initialValue;
    };
  }
  
  // Приклад використання Accumulator
  const accumulator = new Accumulator(5);
  accumulator.increment();
  console.log(accumulator.value); // Виведе 6
  accumulator.decrement();
  console.log(accumulator.value); // Виведе 5
  
  // Приклад використання CancelableAccumulator
  const cancelableAccumulator = new CancelableAccumulator(10);
  cancelableAccumulator.increment();
  console.log(cancelableAccumulator.value); // Виведе 11
  cancelableAccumulator.clear();
  console.log(cancelableAccumulator.value); // Виведе 10
  