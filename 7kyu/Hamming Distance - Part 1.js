function hammingDistance(a, b) {
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c++;
        }
    }
    console.log(c);
    // console.log(c);
    // return 0;
}

hammingDistance('100101011011010010010', '101100010110010110101');
