const getSum = (a, b) => {
    // let c = [a, b]
    let c = 0
    if (a<b){
    for(let i = a; i <= b; i++) {
        c += i
        
    }
    console.log(c);}else {
        for(let i = b; i <= a; i++) {
            c += i
            
        }
        console.log(c);
    }
}

getSum(0, -1)