let result;
let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
document.getElementById('result').value = result;

class Calculator {

  constructor(number1, number2) {
      this.number1 = number1;
      this.number2 = number2;
  }
  static addNumbers() {
      return +number1 + +number2;
  }
  static subtractNumbers() {
      return +number1 - +number2;
  }
  static multiplyNumbers() {
      return +number1 * +number2;
  }
  static divideNumbers() {
      return +number1 / +number2;
  }
}
let plus = Calculator.addNumbers();
