var isSquare = function(n){
    // let a = Math.sqrt(n);
    if (Number.isInteger(Math.sqrt(n)) || n == 0) {
        console.log(true);
    } else if (n < 0) {
        console.log(false)
    } else {
        console.log(false)
    }
    // return false; // fix me
  }

  isSquare(8)