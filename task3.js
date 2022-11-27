// let operator;
// function func() {
//   let result;
//   let number1 = document.getElementById('number1').value;
//   let number2 = document.getElementById('number2').value;
//   switch (operator) {
//     case '+':
//     result = +number1 + +number2; 
//     break;
//     case '-':
//       result = +number1 - +number2; 
//       break;
//       case '*':
//       result = +number1 * +number2; 
//       break;
//       case '/':
//         if (number2 == 0) {
//           alert ("На 0 делить нельзя!");
//         }
//         else 
//       result = +number1 / +number2; 
//       break;
//       }
    
//     document.getElementById('result').value = result;
// }

let result;
let operator;

function func() {
  let result;
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
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
  switch (operator) {
    case '+':
        addNumbers(); 
    break;
    case '-':
        subtractNumbers() 
      break;
      case '*':
        multiplyNumbers() 
      break;
      case '/':
        if (number2 == 0) {
          alert ("На 0 делить нельзя!");
        }
        else 
        divideNumbers()  
      break;
      }
    
    document.getElementById('result').value = result;
}


// function add() {
//   let number1 = document.getElementById('number1').value;
//   let number2 = document.getElementById('number2').value;

 
//   let result = +number1 + +number2;
//   return document.getElementById('result').value = result;
//   }

//   function subtract() {
//     let number1 = document.getElementById('number1').value;
//     let number2 = document.getElementById('number2').value;
//     let result = +number1 - +number2;
//     return document.getElementById('result').value = result;
//     }

//     function multiply() {
//       let number1 = document.getElementById('number1').value;
//       let number2 = document.getElementById('number2').value;
//       let result = (Number(number1) * Number(number2));
//       return document.getElementById('result').value = result;
//       }
      
//       function divide() {
//         let number1 = document.getElementById('number1').value;
//         let number2 = document.getElementById('number2').value;
//         let result = (Number(number1) / Number(number2));
        // if (number2 == 0) {
        //   alert ("На 0 делить нельзя!");
        // }
        // else document.getElementById('result').value = result;
        // }