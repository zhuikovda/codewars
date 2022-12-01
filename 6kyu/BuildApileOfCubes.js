function findNb(m) {
    // your code    
        let res = 0;
    for (let i = 0; res < m; i++) {
        res += Math.pow(i, 3);
        if (res === m) {
            console.log(i); 
        }
    }
    console.log(-1);
}

findNb(4183059834009);