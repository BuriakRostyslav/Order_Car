let num1 = prompt('Write first number');
let num2 = prompt('Write second number');

// Check for empty fields
if (num1 === "" || num2 === "") {
  alert('Error: Please enter valid numbers in both fields.');
} else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let sum = num1 + num2;
  let diff = num1 - num2;
  let pr = num1 * num2;
  let div;

  // Check for division by zero
  if (num2 === 0) {
    alert('Error: Division by zero is not allowed.');
  } else {
    div = num1 / num2;
  }

  // Check if the first number is less than the second number
  if (num1 < num2) {
    const confirmation = confirm('Ви впевнені, що хочете продовжити операцію?');
    if (confirmation) {
      let result = 'Result:' + '\n' + sum + '\n' + diff + '\n' + pr +'\n' + div;
      alert(result);
    } else {
      alert('Operation aborted.');
    }
  } else {
    let result = 'Result:' + '\n' + sum + '\n' + diff + '\n' + pr +'\n' + div;
    alert(result);
  }
}
