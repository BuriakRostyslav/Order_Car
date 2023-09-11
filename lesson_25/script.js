// Функція для перевірки об'єкта на пустоту
function isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  
  // Об'єкт user
  const user = {
    name: "John",
    age: 30,
    sayHello: function () {
      return `Привіт, я ${this.name}, мені ${this.age} років.`;
    },
  };
  
  // Об'єкт калькулятор
  const calculator = {
    num1: 0,
    num2: 0,
    ask: function () {
      this.num1 = parseFloat(prompt("Введіть перше число:"));
      this.num2 = parseFloat(prompt("Введіть друге число:"));
    },
    sum: function () {
      return this.num1 + this.num2;
    },
    mul: function () {
      return this.num1 * this.num2;
    },
  };
  
  // Перевірка об'єкта на пустоту
  console.log("Чи є об'єкт user пустим:", isEmptyObject(user));
  
  // Виведення повідомлення від об'єкта user
  console.log(user.sayHello());
  
  // Взаємодія з калькулятором
  calculator.ask();
  console.log("Сума:", calculator.sum());
  console.log("Добуток:", calculator.mul());
  