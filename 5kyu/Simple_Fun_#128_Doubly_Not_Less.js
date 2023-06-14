// let num = 0;
const doublyNotLess = (n) => {
  // let numberNum = Number(n);
  // // let isNumber = Number(n.split("").reverse().join(""));
  // doublyNotLess(toString(numberNum + 1));
  // num = numberNum + 1;
  // console.log(num);
  // if (num === 5320) {
  //   return;
  // }

  // let numberNum = Number(n);
  let num = Number(n); //5315
  let numberNumStr = String(num) //"5315"
  let isNumber = Number(numberNumStr.split("").reverse().join("")); //5315
console.log(num);
console.log(numberNumStr);
console.log(isNumber);
  
  for (let i = 0; true; i++) {
    console.log(isNumber);
    num += 1;  

    if (num === 5320) {
      return;
    } 
    
  }
};

doublyNotLess("5314");
