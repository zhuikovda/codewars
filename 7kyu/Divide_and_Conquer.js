const divCon = (x) => {
    let sumNum = 0;
    let sumStr = 0;
    for (let i = 0; i < x.length; i++) {
        if (Number.isInteger(x[i])) {
            sumNum += x[i];
        } else {
            sumStr += Number(x[i]);
        };
    };
    console.log(sumNum - sumStr);
};


divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]);