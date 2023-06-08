//Мое решение
// const secondSymbol = (s, Symbol) => {
//   let countSumbol = 0;
//   for (let i = 0; i <= s.length - 1; i++) {
//     if (s[i] === Symbol) {
//       countSumbol = countSumbol + 1;
//       if (countSumbol === 2) {
//         console.log(i);
//       }
//     }
//   }
//   if (countSumbol === 1 || countSumbol === 0) {
//     console.log(-1);
//   }
// };

//не мое
function secondSymbol(s, symbol) {
//   console.log(s.indexOf(symbol, s.indexOf(symbol) + 1));
  const index = s.indexOf(symbol);
//   console.log(index);
  console.log(s.indexOf(symbol, index + 1)); 
}

secondSymbol("Hello world!!!", "l");
