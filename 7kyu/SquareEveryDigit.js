function squareDigits(num){
    if (Number.isInteger(num)) {
        // let a = (""+num).split("").map(Number)
        let b = num.toString();
        let c = '';
        // let a = [...b];

        for (let i = 0; i < b.length; i++) {            
            c += Math.pow(b[i], 2);     
            
        }
        console.log(typeof Number(c));
       
    }
  }
  
  squareDigits(2112)