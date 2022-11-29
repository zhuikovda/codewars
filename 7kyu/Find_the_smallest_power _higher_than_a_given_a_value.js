function findNextPower(val, pow_) {
    //your code here
    // console.log(Math.pow(val, pow_));
    // console.log(Math.cbrt(val));
    let a = Math.ceil(Math.pow(val, 1/pow_));
    let b = Math.pow(a, pow_);
    if (val > 0 && Number.isInteger(val) && pow_ > 1 && b !== val) {          
        console.log(b);
    } else if (b === val) {
        a = a + 1;
        console.log(Math.pow(a, pow_));
    } else {
        console.log(0);
    }

    // return 0;
}
// 
findNextPower(8, 3)