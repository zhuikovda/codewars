function persistence(num) {
    //code me
    let res = 0
    let str = String(num);    
    for (let i = 0; str.length > 1; i++) {
        str = String([...str].reduce((acc, curr) => acc * curr));
        res++;
    }
    console.log(res)
 }

 persistence(39);