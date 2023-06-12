var Calculator = {
  add: function add(a, b) {
    console.log(a + b);
  },
  subtract: function subtract(a, b) {
    console.log(a - b);
  },
  multiply: function subtract(a, b) {
    console.log(a * b);
  },
  divide: function subtract(a, b) {
    console.log(b !== 0 ? a / b : false);
  },
};


// не мое решение
// var Calculator = {
//   add:     (a, b) => a + b,
//   subtract:(a, b) => a - b,
//   multiply:(a, b) => a * b,
//   divide:  (a, b) => b ? a / b : false
// };

Calculator.divide(6, 0);
